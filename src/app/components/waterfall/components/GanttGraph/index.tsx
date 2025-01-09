import { Gantt, Task } from 'gantt-task-react';
import mockData from '../../mock/waterfall-mock.json';
import { ViewMode } from 'react-gantt-chart';
import "gantt-task-react/dist/index.css";

const GanttGraph = () => {

    const tasks: Task[] = mockData
    .filter((item) => item.delivery_date && item.actual_delivery_date)
    .map((item, index) => ({
      id: `task-${index + 1}`,
      name: item.Resumo || `Task ${index + 1}`,
      start: new Date(item.delivery_date),
      end: new Date(item.actual_delivery_date),
      progress: item.Pontuacao ? Math.min(item.Pontuacao * 10, 100) : 0,
      dependencies: [],
      type: "task",
    }));

    return (
        <div style={{ padding: "20px", background: "#222", color: "#fff" }}>
            <h2>Exemplo de Gráfico de Gantt</h2>
            <Gantt tasks={tasks} viewMode={ViewMode.Day} locale="pt-BR" />
        </div>
    );
}; 

export default GanttGraph;