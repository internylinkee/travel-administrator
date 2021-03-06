import React from 'react';
import {
  Layout,
  Typography,
  Row,
  Col,
  Icon,
  Tag,
  Avatar,
  Modal,
  Upload,
  Card,
  Comment,
  Switch
} from 'antd';

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

const IconText = ({ type, text }) => (
  <span className="count-post">
    <Icon style={{ marginRight: 6 }} type={type} />
    {text}
  </span>
);

// Image
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Comment
const ExampleComment = ({ children }) => (
  <Comment
    actions={[<span>Xem thêm</span>]}
    author="Han Solo"
    avatar={(
      <Avatar
        alt="Han Solo"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    )}
    content={(
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    )}
  >
    {children}
  </Comment>
);

class reviewDetail extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      },
      {
        uid: '0',
        name: 'xxx.png',
        status: 'done',
        url: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
      }
    ]
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Content>
          <Row className="gutter-example" gutter={16}>
            <Col className="gutter-row" span={16}>
              <Typography>
                <Title>Đi chơi Nha Trang nên ăn gì ở đâu?</Title>
                <Text className="text-time divider">
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" style={{ marginRight: 5 }} />John Bown
                </Text>
                <Text className="text-time">2019/06/12 13:35:00</Text>
                <IconText text="156" type="heart" />
                <IconText text="2" type="message" />
                <IconText text="156" type="like-o" />
                <IconText text="Đà Nẵng, Nha Trang" type="environment" />
                <span className="tag-post">
                  <Tag color="volcano">Ăn uống</Tag>
                  <Tag color="geekblue">Vui chơi</Tag>
                  <Tag color="purple">Tham quan</Tag>
                </span>
                <Paragraph className="description-post">
                  In the process of internal desktop applications development, many different design specs and
                  implementations would be involved, which might cause designers and developers difficulties and
                  duplication and reduce the efficiency of development. After massive project practice and summaries,
                  Ant Design, a design language for background applications, is refined by Ant UED Team, which aims to
                </Paragraph>
                <Paragraph className="content-post">
                  Totidemque porrexerat tellure obstabatque regio
                  Sibi minantia in onerosior iners. Mentes inmensa porrexerat regat inter coeperunt galeae inposuit
                  Mixta dispositam chaos: igni unda nulli posset: densior haec. Contraria septemque unda fuit
                  orba nubes valles terrarum. Peragebant vos neu divino viseret tenent terras sectamque onerosior.
                  Aurea sorbentur animal fuit triones
                  Fratrum coeptis ignotas nulli sine
                  Ab mutastis quisque lucis fossae
                  Undae ardentior chaos: imagine contraria uno moderantum. Abscidit summaque terris al
                  iud concordi nuper natura terras. Ventos cura finxit pace dei otia pluvialibus. Habentia cael
                  caesa. Ita boreas ulla agitabilis onerosior recens liberioris mare obstabatque.
                  Cuncta praecipites dominari undae aera mentisque.
                  Retinebat cinxit suis omnia ensis auroram vis secant diverso regna
                  <br />
                  <br />
                  Undae ardentior chaos: imagine contraria uno moderantum. Abscidit summaque terris al
                  iud concordi nuper natura terras. Ventos cura finxit pace dei otia pluvialibus. Habentia cael
                  caesa. Ita boreas ulla agitabilis onerosior recens liberioris mare obstabatque.
                  Cuncta praecipites dominari undae aera mentisque.
                  Retinebat cinxit suis omnia ensis auroram vis secant diverso regna
                  Mixta recens aequalis ardentior effigiem terra extendi illi moles nunc cognati
                  flamma chaos: ignotas cum et bracchia ligavit: forma
                  Pendebat onus vis dicere militis circumdare crescendo parte recepta oppida corpora dominari
                  recessit ignea flexi tractu ut mixtam tuba amphitrite frigore secant alta
                  Circumfuso toto sed. Pondere sine deorum rectumque iuga ille. Mixtam vos.
                  Pinus est terrarum onus timebat mundum contr
                  haec legebantur quicquam nix metusque tollere. Illi mare erat: duae cum ripis aethere.
                  Pondus manebat totidemque erectos.
                  Totidemque porrexerat tellure obstabatque regio
                  umentia scythiam tellus tenent boreas utque secant inclusum
                  Iunctarum media terrenae traxit ensis surgere ubi adhuc solidumque magni densior locis
                </Paragraph>
              </Typography>
            </Col>
            <Col className="gutter-row" span={8}>
              <Card
                bordered={false}
                extra={
                  <Switch defaultChecked />
                }
                title="Trạng thái"
              >
                Bài viết được hiển thị trên website
              </Card>

              <Card bordered={false} title="Ảnh liên quan">
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  fileList={fileList}
                  listType="picture-card"
                  onChange={this.handleChange}
                  onPreview={this.handlePreview}
                >
                  {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal footer={null} onCancel={this.handleCancel} visible={previewVisible}>
                  <img alt="example" src={previewImage} style={{ width: '100%' }} />
                </Modal>
              </Card>

              <Card bordered={false} title="Bình luận">
                <ExampleComment />
                <ExampleComment />
              </Card>
            </Col>
          </Row>

        </Content>
      </div>
    );
  }
}

export default reviewDetail;

reviewDetail.displayName = 'ReviewDetail';
