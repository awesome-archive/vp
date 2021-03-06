import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import { browserHistory } from 'react-router';
import { Row, Col, Card, Icon } from 'antd';

import SiteDesc from './components/SiteDesc';
import SiteTimeline from './components/SiteTimeline';

import style from './style.less';

class About extends React.PureComponent {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {

    };
  }

  render() {
    const me = this;

    return <Card
      className={style.container}
      style={{minHeight: window.innerHeight * 0.8}}
      title={<span><Icon type="info-circle" />&nbsp;&nbsp;&nbsp;About ColorPK</span>}>
      <Row>
        <Col
          className={style.colBox}
          xs={24}
          sm={12}
          md={12}
          lg={12}>
          <SiteTimeline />
        </Col>
        <Col
          className={style.colBox}
          xs={24}
          sm={12}
          md={12}
          lg={12}>
          <SiteDesc />
        </Col>

      </Row>

    </Card>
  }
}

export default About;