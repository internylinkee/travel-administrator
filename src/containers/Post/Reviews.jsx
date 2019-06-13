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
import { isEmpty } from 'lodash';

const { Title } = Typography;
const { Content } = Layout;

const DATA_BUTTON = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  COLLECTION: {
    PUBLIC: {
      type: 'primary',
      content: 'Public'
    },
    PRIVATE: {
      type: 'danger',
      content: 'Private'
    }
  }
};

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
      buttonKey: DATA_BUTTON.PUBLIC,
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

  /**
   * Xử lý sư kiện bật tắt trạng thái của button
   * @returns {void} update state
   * @memberof listPosts
   */
  handleToggleStatusButton = () => {
    let buttonKey = DATA_BUTTON.PUBLIC;
    if (this.state.buttonKey === DATA_BUTTON.PUBLIC) {
      buttonKey = DATA_BUTTON.PRIVATE;
    }
    this.setState({ buttonKey });
  }

  /**
   *Get data button
   * @param {string} attr atrribute name
   * @param {string} key button key
   * @returns {string} data button theo attribute name
   * @memberof listPosts
   */
  getDataButton = (attr = 'type', key = DATA_BUTTON.PUBLIC) => {
    const data = DATA_BUTTON.COLLECTION;
    if (isEmpty(data[key]) || isEmpty(data[key][attr])) {
      return '';
    }
    return data[key][attr];
  }

  render() {
    const columns = [
      {
        title: '#',
        dataIndex: 'key',
        key: 'key'
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: '30%',
        ...this.getColumnSearchProps('title')
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        ...this.getColumnSearchProps('author')
      },
      {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
        ...this.getColumnSearchProps('location')
      },
      {
        title: 'Tags',
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
        title: 'Action',
        key: 'action',
        // eslint-disable-next-line react/display-name
        render: (text, record) => (
          <span>
            <Button
              ghost
              name="buttonStatus"
              onClick={this.handleToggleStatusButton}
              type={this.getDataButton('type', this.state.buttonKey)}
            >
              {this.getDataButton('content', this.state.buttonKey)}
            </Button>
          </span>
        )
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
