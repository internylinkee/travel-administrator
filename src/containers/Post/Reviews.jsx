import React from 'react';
import {
  Table,
  Tag,
  Input,
  Button,
  Icon,
  Typography,
  Layout
} from 'antd';

const { Title } = Typography;
const { Content } = Layout;

const data = [
  {
    key: '1',
    title: 'Những món ngon ở Đà Lạt',
    author: 'John Brown',
    location: 'Đà Lạt',
    tags: ['Ăn uống']
  },
  {
    key: '2',
    title: 'Địa điểm tham quan ở Nha Trang',
    author: 'Jim Green',
    location: 'Nha Trang',
    tags: ['Tham quan', 'Vui chơi']
  },
  {
    key: '3',
    title: 'Những khu vui chơi nên đến ở Đà Nẵng',
    author: 'Joe Black',
    location: 'Đà Nẵng',
    tags: ['Vui chơi']
  }
];

// eslint-disable-next-line no-plusplus
for (let i = 4; i < 46; i++) {
  data.push({
    key: i,
    title: `Non aethera figuras coeperunt effervescere ${i}`,
    author: 'Oppida',
    location: `London, Park Lane no. ${i}`,
    tags: ['Vui chơi']
  });
}

class listPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          placeholder={`Search ${dataIndex}`}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
          value={selectedKeys[0]}
        />
        <Button
          icon="search"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          size="small"
          style={{ width: 90, marginRight: 8 }}
          type="primary"
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon style={{ color: filtered ? '#1890ff' : undefined }} type="search" />
    ),
    onFilter: (value, record) => record[dataIndex]
      .toString()
      .toLowerCase()
      .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    }
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: '#',
        dataIndex: 'key',
        key: 'key'
      },
      {
        title: 'Tiêu đề',
        dataIndex: 'title',
        key: 'title',
        width: '30%',
        ...this.getColumnSearchProps('title')
      },
      {
        title: 'Tác giả',
        dataIndex: 'author',
        key: 'author',
        ...this.getColumnSearchProps('author')
      },
      {
        title: 'Địa điểm',
        dataIndex: 'location',
        key: 'location',
        ...this.getColumnSearchProps('location')
      },
      {
        title: 'Thẻ',
        key: 'tags',
        dataIndex: 'tags',
        // eslint-disable-next-line react/display-name
        render: tags => (
          <span>
            {tags.map((tag) => {
              let color = 'geekblue';
              if (tag === 'Ăn uống') {
                color = 'volcano';
              } else if (tag === 'Tham quan') {
                color = 'green';
              }
              return (
                <Tag key={tag} color={color}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: 'Trạng thái',
        key: 'status',
        // eslint-disable-next-line react/display-name
        render: () => (<Tag color="#108ee9">Hiển thị</Tag>)
      }

    ];
    return (
      <div>
        <Title level={3}>Danh sách bài viết</Title>
        <Content>
          <Table columns={columns} dataSource={data} />
        </Content>
      </div>
    );
  }
}

export default listPosts;

listPosts.displayName = 'ListPosts';
