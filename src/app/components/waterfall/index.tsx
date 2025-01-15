import GanttGraph from './components/GanttGraph';
import SCurveChart from './components/SCurveChart';
import Table from '../common/Table/V1';
import mock from './mock/waterfall-mock.json';
import { theme } from '@/app/style/customThemeProvider';

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

  console.log(formattedTableData);

  return (
    <>
    <div style={{  width:1000, background: theme.colors.tableGray, borderRadius: 8, color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#000' }}>Tarefas</h2>
      <Table data={formattedTableData} headers={headers} />
    </div>
      <GanttGraph />
      <SCurveChart />
    </>
  );
}