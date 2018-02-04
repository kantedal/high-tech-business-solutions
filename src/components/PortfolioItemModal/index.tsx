import * as React from 'react'
import * as ReactModal from 'react-modal'

import { IPortfolioItem } from '../../portfolio'
import { IconButton } from '../IconButton'
import { MediaCarousel } from '../MediaCarousel'
import * as style from './styles/style.css'
import { StyledModalContainer } from './styles/index'

export namespace PortfolioItemModal {
  export interface Props {
    portfolioItem: IPortfolioItem
    isMobile: boolean,
    isOpen: boolean
    closeModal: () => void
  }
  export interface State {
    isVisible: boolean
  }
}
export class PortfolioItemModal extends React.Component<PortfolioItemModal.Props, PortfolioItemModal.State> {

  constructor(props: PortfolioItemModal.Props) {
    super(props)
    this.state = { isVisible: false }
  }

  render() {
    const { portfolioItem, isOpen, closeModal, isMobile } = this.props 

    const bgAlpha = this.state.isVisible ? '0.5' : '0.0'
    const customStyles = {
      content : {
        background: 'transparent',
        border: 'none',
        pointerEvents: 'none',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, ' + bgAlpha + ')',
        transition: 'background-color 300ms ease'
      }
    }

    const close = () => {
      closeModal()
      this.setState({ ...this.state, isVisible: false })
    }

    return (
      <div>
         <ReactModal 
          isOpen={isOpen}
          onRequestClose={close}
          onAfterOpen={() => this.setState({ ...this.state, isVisible: true })}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          closeTimeoutMS={300}
          contentLabel='Modal'
        >
          <StyledModalContainer isOpen={this.state.isVisible} isMobile={isMobile} >
            <MediaCarousel medias={portfolioItem.medias} />
            <h1 className={style.portfolioModalHeader}> {portfolioItem.header}</h1>
            <p className={style.modalDescription}>{portfolioItem.longDescription}</p>
            <div style={{marginLeft: '15px'}}>
              {this.renderProjectSourceUrlButton(portfolioItem)}
              {this.renderProjectUrlButton(portfolioItem)}
              {this.renderCloseButton(isMobile, closeModal)}
            </div>
          </StyledModalContainer>
        </ReactModal>
      </div>
    )
  }

  private openProjectSourceUrl = () => {
    const { portfolioItem } = this.props
    window.open(portfolioItem.projectSourceUrl, '_blank')
  }

  private openProjectUrl = () => {
    const { portfolioItem } = this.props
    window.open(portfolioItem.projectUrl, '_blank')
  }

  private renderProjectSourceUrlButton(portfolioItem: IPortfolioItem) {
    if (portfolioItem.projectSourceUrl) {
      return <IconButton text={'Source'} icon={'zmdi zmdi-run'} onClick={this.openProjectSourceUrl} />
    }
  }

  private renderProjectUrlButton(portfolioItem: IPortfolioItem) {
    if (portfolioItem.projectUrl) {
      return <IconButton text={'Project'} icon={'zmdi zmdi-link'} onClick={this.openProjectUrl} />
    }
  }

  private renderCloseButton(isMobile: boolean, closeModal: any) {
    if (isMobile) {
      return (
        <div className={style.closeButtonHolder}>
          <IconButton text={'Close'} icon={'zmdi zmdi-close'} color={'#f00'} onClick={closeModal} />
        </div>
      )
    }
  }

}

ReactModal.setAppElement('#root')
