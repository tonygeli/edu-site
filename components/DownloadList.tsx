import { Table, Button } from 'antd';

const files = [
  { key: 1, name: "初中数学试卷", file: "math1.pdf", subject: "数学", grade: "初中" },
  { key: 2, name: "高中英语作文模板", file: "english1.docx", subject: "英语", grade: "高中" },
  // 可扩展更多资源
];

const columns = [
  { title: '文件名', dataIndex: 'name', key: 'name' },
  { title: '学科', dataIndex: 'subject', key: 'subject' },
  { title: '年级', dataIndex: 'grade', key: 'grade' },
  {
    title: '操作',
    key: 'action',
    render: (_: any, record: any) => (
      <a href={`/api/download?file=${encodeURIComponent(record.file)}`} download>
        <Button type="link">下载</Button>
      </a>
    )
  }
];

export default function DownloadList() {
  return <Table dataSource={files} columns={columns} pagination={false} />;
}