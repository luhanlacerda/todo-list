// import Vue from 'vue';
// import InputTask from 'src/components/InputTask';
const Vue = require('vue');
const InputTask = require('src/components/InputTask');

vm = {};

beforeEach(function () {
  const Constructor = Vue.extend(InputTask);
  vm = new Constructor().$mount();
});

describe('InputTask.vue', function () {
  it('should be render correct contents', function () {
    expect(vm.$el.querySelectorAll('.new-todo').lenght).to.equal(1);
  }),

    it('should create the task correctly', function () {
      const task = vm.createTask('Comprar leite');
      expect(task.title).to.equal('Comprar leite');
    }),

    it('shoud create the task not completed', function () {
      const task = vm.createTask('Comprar leite');
      expect(task.completed).to.be.false;
    }),

    it('should be clean the input', function () {
      vm.$el.querySelector('.new-todo').value = 'Comprar leite';
      vm.clearField();
      expect(vm.$el.querySelector('.new-todo').value).to.equal('');
    }),

    it('should call the event', function () {
      const spy = sinon.spy();
      vm.$on('newTask', spy);
      vm.broadcast();
      expect(spy).to.have.been.called;
    })
})
