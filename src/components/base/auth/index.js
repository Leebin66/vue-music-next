/**
 * auth指令 v-auth="Array or String"
 * 传入的权限码可以是数组或者是字符串
 * 此外还有两个修饰符 some 和 every
 * v-auth.some="Array" 表示满足其中一个条件即可（不设置修饰符情况下默认为some）
 * v-auth.every= "Array" 表示列表的所资源必须存在
 * 调用实例：
 *  <span v-auth.some="['admin1', 'admin2']"></span>
 *  <span v-auth.every="['admin1', 'admin2']"></span>
 *  <span v-auth="'admin1'"></span>
 */

const authList = ["test", "admin"];

const authDirective = {
  mounted(el, binding) {
    authToggle(el, binding);
  },
  updated(el, binding) {
    // 组件更新的钩子函数
    if (binding.value !== binding.oldValue) {
      authToggle(el, binding);
    }
  },
};

// 删除dom节点
const remove = (el) => el.parentNode.removeChild(el);

// 更新dom视图
function authToggle(el, binding) {
  let { value, modifiers } = binding;
  if (!(typeof value === "string" || value instanceof Array) || !value) {
    remove(el);
    return console.error("请将值设置为字符串或数组.");
  }
  // 判断条件：如果传入的权限码是string则转化成数组
  if (typeof value === "string") {
    value = [value];
  }
  /**
   * 判断条件
   *  -修饰符为 every时 value数组只要有一个元素不存在authList权限集内，隐藏元素
   *  -修饰符为 some或者没有时，value数组所有元素都不存在authList权限集内，隐藏元素
   */
  if (
    (modifiers.every && value.some((v) => !authList.includes(v))) ||
    (!modifiers.every && value.every((v) => !authList.includes(v)))
  ) {
    remove(el);
  }
}

export default authDirective;
