import GanttGraph from './components/GanttGraph';
import SCurveChart from './components/SCurveChart';
import Table from '../common/Table/V1';
import mock from './mock/waterfall-mock.json';

export default function Waterfall() {
  const formattedTableData = mock.map((task) => ({
    id: task['ID da item'],
    name: task.Resumo,
    startDate: task.initialize_date,
    deliveryDate: task.delivery_date,
    actualDeliveryDate: task.actual_delivery_date,
  }));

  const headers = [
    { name: 'ID', size: 1 },
    { name: 'Nome', size: 3 },
    { name: 'Data de Início', size: 2 },
    { name: 'Data de Entrega Prevista', size: 2 },
    { name: 'Data de Entrega Realizada', size: 2 },
  ];

  return (
    <>
      <GanttGraph />
      <SCurveChart />
    </>
  );
}