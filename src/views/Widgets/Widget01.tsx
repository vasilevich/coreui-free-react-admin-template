import React, {Component} from 'react';
import {Card, CardBody, Progress} from 'reactstrap';
import classNames from 'classnames';
import {mapToCssModules} from 'reactstrap/lib/utils';

type propTypes = {
  header?: any,
  mainText?: any,
  smallText?: any,
  color?: any,
  value?: any,
  children?: any,
  className?: any,
  cssModule?: any,
  variant?: any,
};

const defaultProps = {
  header: '89.9%',
  mainText: 'Lorem ipsum...',
  smallText: 'Lorem ipsum dolor sit amet enim.',
  // color: '',
  value: '25',
  variant: '',
};

class Widget01 extends Component<propTypes, any> {
  public static defaultProps: Partial<propTypes> = defaultProps;

  render() {
    const {className, cssModule, header, mainText, smallText, color, value, children, variant, ...attributes} = this.props;

    // demo purposes only
    const progress = {style: '', color: color, value: value};
    const card = {style: '', bgColor: ''};

    if (variant === 'inverse') {
      progress.style = 'progress-white';
      progress.color = '';
      card.style = 'text-white';
      card.bgColor = 'bg-' + color;
    }

    const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);
    progress.style = classNames('progress-xs my-3', progress.style);

    return (
      <Card className={classes} {...attributes}>
        <CardBody>
          <div className="h4 m-0">{header}</div>
          <div>{mainText}</div>
          <Progress className={progress.style} color={progress.color} value={progress.value}/>
          <small className="text-muted">{smallText}</small>
          <div>{children}</div>
        </CardBody>
      </Card>
    );
  }
}

export default Widget01;
