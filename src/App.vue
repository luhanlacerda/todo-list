<template>
  <section class="todoapp">
    <header class="header">
      <h1>Tarefas</h1>
      <InputTask @newTask="addTask" />
      <TaskList v-bind:todo-list="tasks"/>
    </header>
  </section>
</template>

<script>
import InputTask from '@/components/InputTask';
import TaskList from '@/components/TaskList';

export default {
  name: 'App',
  components: {
    InputTask,
    TaskList
  },
  data () {
    return {
      tasks: []
    };
  },
  methods: {
    addTask (task) {
      this.tasks.push(task);
    }
  }
};
</script>

<style>

</style>
