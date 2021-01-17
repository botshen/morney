declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
//引入svg提示解决代码
declare module '*.svg' {
  const content: string;
  export default content;
}