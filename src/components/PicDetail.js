import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import Icon from 'antd/lib/icon';
import PropTypes from 'prop-types';
import './pic-details-anim.css';
import mikh from '../components/page/img/mikh.jpg';

const textData = 
    {
    content: 'Gallery ini berisikan semua yang saya sukai',
    title: 'My Gallery',
    };

let dataArray = [
  { image: 'https://cdn.idntimes.com/content-images/post/20170921/pesona-pantai-drini-hotel-murah-di-jogja-72a79f1a28f4fbb5138a2fd38af02dfc.jpg' },
  { image: 'https://selerasa.com/wp-content/uploads/2015/05/images_mie_Mie_ayam_15-mie-ayam-bakso.jpg' },
  { image: 'http://www.cosmogirl.co.id/gallery/timthumb/timthumb.php?src=http://www.cosmogirl.co.id/gallery/teaser/69c7106c4d8aac8b3ea435ae287d37e5.jpg&h=480&w=640&a=t' },
  { image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Olympics_2012_Mixed_Doubles_Final.jpg' },
  { image: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn' },
  { image: 'https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/alt-597a2ef226ea8-4006-41a8f73dea74c0087fb532779f8945fb@1x.jpg' },
  { image: 'https://study.com/cimages/multimages/16/flower-roses-red-roses-bloom.jpg' },
  { image: 'http://fotowisata.com/wp-content/uploads/2013/11/Sunset-Pantai-Kuta.jpg' },
  { image: 'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png' },
];
dataArray = dataArray.map(item => ({ ...item, ...textData }));
export default class PicDetailsDemo extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'pic-details-demo',
  };

  constructor(props) {
    super(props);
    this.state = {
      picOpen: {},
    };
  }

  onImgClick = (e, i) => {
    const { picOpen } = this.state;
    Object.keys(picOpen).forEach((key) => {
      if (key !== i && picOpen[key]) {
        picOpen[key] = false;
      }
    });
    picOpen[i] = true;
    this.setState({
      picOpen,
    });
  };

  onClose = (e, i) => {
    const { picOpen } = this.state;
    picOpen[i] = false;
    this.setState({
      picOpen,
    });
  };

  onTweenEnd = (i) => {
    const { picOpen } = this.state;
    delete picOpen[i];
    this.setState({
      picOpen,
    });
  };

  getDelay = (e) => {
    const i = e.index + dataArray.length % 4;
    return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
  };

  getLiChildren = () => {
    const imgWidth = 110;
    const imgHeight = 76;
    const imgBoxWidth = 130;
    const imgBoxHeight = 96;
    return dataArray.map((item, i) => {
      const { image, title, content } = item;
      const isEnter = typeof this.state.picOpen[i] === 'boolean';
      const isOpen = this.state.picOpen[i];

      const left = isEnter ? 0 : imgBoxWidth * (i % 4);
      const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
      const isRight = Math.floor((i % 4) / 2);
      const isTop = Math.floor(i / 4);
      let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
      top = isEnter ? top : imgBoxHeight * isTop;
      let imgTop = isTop ? imgBoxHeight : 0;
      imgTop = isEnter ? imgTop : 0;

      const liStyle = isEnter ? { width: '100%', height: 175, zIndex: 1 } : null;
      const liAnimation = isOpen ?
        ({ boxShadow: '0 2px 8px rgba(140, 140, 140, .35)' }) :
        ({ boxShadow: '0 0px 0px rgba(140, 140, 140, 0)' });
      let aAnimation = isEnter ?
        ({
          delay: 400,
          ease: 'easeInOutCubic',
          width: imgWidth,
          height: imgHeight,
          onComplete: this.onTweenEnd.bind(this, i),
          left: imgBoxWidth * (i % 4),
          top: isTop ? imgBoxHeight : 0,
        }) : null;
      aAnimation = isOpen ?
        ({
          ease: 'easeInOutCubic',
          left: isRight ? (imgBoxWidth * 2) - 10 : 0,
          width: '50%',
          height: 175,
          top: 0,
        }) : aAnimation;

      // 位置 js 控制；
      return (
        <TweenOne
          key={i}
          style={{
            left,
            top,
            ...liStyle,
          }}
          component="li"
          className={isOpen ? 'open' : ''}
          animation={liAnimation}
        >
          <TweenOne
            component="a"
            onClick={e => this.onImgClick(e, i)}
            style={{
              left: imgLeft,
              top: imgTop,
            }}
            animation={aAnimation}
          >
            <img src={image} width="100%" height="100%" />
          </TweenOne>
          <TweenOneGroup
            enter={[
              {
                opacity: 0, duration: 0, type: 'from', delay: 400,
              },
              { ease: 'easeOutCubic', type: 'from', left: isRight ? '50%' : '0%' },
            ]}
            leave={{ ease: 'easeInOutCubic', left: isRight ? '50%' : '0%' }}
            component=""
          >
            {isOpen && (
              <div
                className={`${this.props.className}-text-wrapper`}
                key="text"
                style={{
                  left: isRight ? '0%' : '50%',
                }}
              >
                <h1>{title}</h1>
                <Icon type="cross" onClick={e => this.onClose(e, i)} />
                <em />
                <p>{content}</p>
              </div>
            )}
          </TweenOneGroup>
        </TweenOne>
      );
    });
  };

  render() {
    return (
      <div>
        <div className={`${this.props.className}-wrapper`}>
          <div className={this.props.className}>
            <QueueAnim type="bottom" className={`${this.props.className}-title`}>
              <h1 key="h1">Gallery</h1>
            </QueueAnim>
            <QueueAnim
              delay={this.getDelay}
              component="ul"
              className={`${this.props.className}-image-wrapper`}
              interval={0}
              type="bottom"
            >
              {this.getLiChildren()}
            </QueueAnim>
          </div>
        </div>
      </div>
    );
  }
}