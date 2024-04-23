import Gantt from "frappe-gantt";

export class RuntimeService {


  public generateData(): Array<Gantt.Task> {

    var arr = new Array<Gantt.Task>()

    for (let index = 0; index < 9; index++) {
      arr.push(this.makeTask(index.toString(), 'Person Beavers'))
    }

    arr.push(this.makeTaskDependant('10', 'Person Cubs', '7' ))
    arr.push(this.makeTaskDependant('11', 'Person Cubs', '8' ))


    return arr;
  }


  makeTask(id: string, name: string): Gantt.Task {
    return {
      id: id,
      name: name,
      start: '2024-08-01',
      end: '2025-06-01',
      progress: 20,
      dependencies: '',
    }
  }

  makeTaskDependant(id: string, name: string, dependant: string): Gantt.Task {
    var t = this.makeTask(id, name);
    t.dependencies = dependant
    t.start = '2025-08-01'
    t.end = '2026-06-01'
    return t
  }



}