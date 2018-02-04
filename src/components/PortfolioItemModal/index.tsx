import * as React from 'react'
import * as style from './style.css'
import * as ReactModal from 'react-modal'
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { PortfolioItem } from '../PortfolioItem/index'
import { MediaCarousel } from '../MediaCarousel/index'
import { IconButton } from '../IconButton/index'

export namespace PortfolioItemModal {
  export interface Props {
    portfolioItem: IPortfolioItem
    isMobile: boolean,
    isOpen: boolean
    closeModal: () => void
  }
  export interface State { }
}

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
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
}

export class PortfolioItemModal extends React.Component<PortfolioItemModal.Props, PortfolioItemModal.State> {

  render() {
    const { portfolioItem, isOpen, closeModal, isMobile } = this.props 
    return (
      <div>
         <ReactModal 
          isOpen={isOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          contentLabel='Modal'
        >
          <div>
            {portfolioItem && (
              <div className={style.portfolioModalContent} style={{ height: isMobile ? '100%' : 'fit-content', marginTop: isMobile ? '0' : '20vh' }}>
                <MediaCarousel medias={portfolioItem.medias} />
                <h1 className={style.portfolioModalHeader}> {portfolioItem.header}</h1>
                <p className={style.modalDescription}>{portfolioItem.longDescription}</p>
                <div style={{marginLeft: '15px'}}>
                  {this.renderProjectSourceUrlButton(portfolioItem)}
                  {this.renderProjectUrlButton(portfolioItem)}
                  {this.renderCloseButton(isMobile, closeModal)}
                </div>
              </div>
            )}
          </div>
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
          <IconButton text={'Close'} icon={'zmdi zmdi-close'} onClick={closeModal} />
        </div>
      )
    }
  }

}

ReactModal.setAppElement('#root')
