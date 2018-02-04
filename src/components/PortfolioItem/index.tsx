import * as React from 'react'
import { Col } from 'react-flexbox-grid'
import LazyLoad from 'react-lazyload'
import { Transition } from 'react-transition-group'

import { IPortfolioItem } from '../../portfolio'
import { PortfolioItemContent } from './PortfolioItemContent'
import * as style from './style.css'

const defaultStyle = {
  transition: `opacity 500ms, transform 500ms`,
  opacity: 0,
  transform: 'translateY(100px)',
  width: 'calc(100% - 14px)'
}

const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(20px)' },
  entered:  { opacity: 1, transform: 'translateY(0px)' },
  exiting: { opacity: 0, transform: 'translateY(20px)' },
  exited:  { opacity: 0, transform: 'translateY(20px)' },
}

const foregroundDefaultStyle = {
  transition: `opacity 500ms`,
  opacity: 0,
  width: 'calc(100% - 14px)',
  position: 'absolute',
  padding: '7px'
}

const transitionStylesForeground = {
  entering: { opacity: 0 },
  entered:  { opacity: 0 },
  exiting: { opacity: 1 },
  exited:  { opacity: 1 },
}

export namespace PortfolioItem {
  export interface Props {
    portfolioItem: IPortfolioItem
    isMobile: boolean
    delay: number
    portfolioItemClick: (portfolioItem: IPortfolioItem) => void 
  }
  export interface State {
    show: boolean
  }
}

const Column: any = Col

export const PorfolioItemLoader: React.SFC<any> = ({name, imgUrl, linkedInUrl, emailUrl, githubUrl, websiteUrl, isMobile}) => {
  return <div style={{ padding: '5px', width: '200px' }} />
}

export class PortfolioItem extends React.Component<PortfolioItem.Props, PortfolioItem.State> {

  constructor(props: PortfolioItem.Props) {
    super(props)
    this.state = { show: false }
  }

  render() {
    const { portfolioItem, portfolioItemClick, delay, isMobile } = this.props
    const portfolioClick = () => portfolioItemClick(portfolioItem)

    // if (this.state.visible) {
    return (
      <Transition in={this.state.show} timeout={100} style={{ width: '100%' }}>
        {(state) => {
          return (
            <Column xs={12} sm={6} md={6} lg={6} xl={4} style={{ position: 'relative' }}>
              <LazyLoad offset={0} height={320} throttle={100} once={true}>
                <PortfolioItemContent 
                  portfolioItem={portfolioItem}
                  portfolioItemClick={portfolioItemClick}
                  isMobile={isMobile}
                  animationState={state}
                  onLoaded={() => this.setState({ show: true })}
                />
              </LazyLoad>
            </Column>
          )
        }}
      </Transition>
    )
  }
}
