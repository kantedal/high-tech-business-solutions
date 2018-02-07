import * as React from 'react'
import * as ReactModal from 'react-modal'

import { IPortfolioItem } from '../../portfolio'
import { IconButton } from '../IconButton'
import { MediaCarousel } from '../MediaCarousel'
import { StyledModalContainer } from './styles'
import * as style from './styles/style.css'

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
        transition: 'background-color 500ms ease'
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
          closeTimeoutMS={isMobile ? 100 : 500}
          contentLabel='Modal'
        >
          <StyledModalContainer isOpen={this.state.isVisible} isMobile={isMobile} >
            <MediaCarousel medias={portfolioItem.medias} />
            <h1 className={style.portfolioModalHeader}> {portfolioItem.header}</h1>
            <p className={style.modalDescription}>{portfolioItem.longDescription}</p>
            <div style={{ marginLeft: '15px', marginTop: '10px' }}>
              {this.renderProjectSourceUrlButton(portfolioItem)}
              {this.renderProjectUrlButton(portfolioItem)}
            </div>

            {this.renderCloseButton(isMobile, closeModal)}
            
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
      return <IconButton text={'Source'} icon={'zmdi zmdi-github-alt'} color={'#4277e2'}  onClick={this.openProjectSourceUrl} />
    }
  }

  private renderProjectUrlButton(portfolioItem: IPortfolioItem) {
    if (portfolioItem.projectUrl) {
      return <IconButton text={'Project'} icon={'zmdi zmdi-run'} color={'#44a07c'} onClick={this.openProjectUrl} />
    }
  }

  private renderCloseButton(isMobile: boolean, closeModal: any) {
    if (isMobile) {
      return (
        <div className={style.closeButtonHolder}>
          <IconButton icon={'zmdi zmdi-close'} round={true} color={'#e24364'} onClick={closeModal} />
        </div>
      )
    }
  }

}

ReactModal.setAppElement('#root')
