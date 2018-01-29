import * as React from 'react'
import * as style from './style.css'
import { Modal } from 'material-ui'
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { PortfolioItem } from '../PortfolioItem/index'
import { MediaCarousel } from '../MediaCarousel/index'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import FileUpload from 'material-ui-icons/FileUpload'
import KeyboardVoice from 'material-ui-icons/KeyboardVoice'
import Icon from 'material-ui/Icon'
import Run from 'material-ui-icons/DirectionsRun'
import Code from 'material-ui-icons/Code'
import Clear from 'material-ui-icons/Clear'

export namespace PortfolioItemModal {
  export interface Props {
    portfolioItem: IPortfolioItem
    isMobile: boolean,
    isOpen: boolean
    closeModal: () => void
  }
  export interface State { }
}

const comp = <div> hej </div>

export class PortfolioItemModal extends React.Component<PortfolioItemModal.Props, PortfolioItemModal.State> {

  render() {

    const { portfolioItem, isOpen, closeModal, isMobile } = this.props
    return (
      <Modal aria-labelledby='simple-modal-title' aria-describedby='simple-modal-description' open={isOpen} onClose={closeModal} >
        <div >
          {portfolioItem && (
            <div className={style.portfolioModalContent} style={{ height: isMobile ? '100%' : 'fit-content', marginTop: isMobile ? '0' : '20vh' }}>
              <MediaCarousel medias={portfolioItem.medias} />
              <h1 className={style.portfolioModalHeader}> {portfolioItem.header}</h1>
              <p className={style.modalDescription}>{portfolioItem.longDescription}</p>
              {this.renderProjectSourceUrlButton(portfolioItem)}
              {this.renderProjectUrlButton(portfolioItem)}
              {this.renderCloseButton(isMobile, closeModal)}
            </div>
          )}
        </div>
      </Modal>
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
      return <Button className={style.modalButton} raised={true} color='primary' onClick={this.openProjectSourceUrl}> <Code style={{ marginRight: '3px' }} />  Source </Button>
    }
  }

  private renderProjectUrlButton(portfolioItem: IPortfolioItem) {
    if (portfolioItem.projectUrl) {
      return <Button className={style.modalButton} raised={true} color='secondary' onClick={this.openProjectSourceUrl}> <Run style={{ marginRight: '3px' }} /> Project  </Button>
    }
  }

  private renderCloseButton(isMobile: boolean, closeModal: any) {
    if (isMobile) {
      return (
        <div className={style.closeButtonHolder}>
          <Button className={style.modalCloseButton} raised={true} color='default' style={{ position: 'fixed'}} onClick={closeModal}> <Clear />  </Button>
        </div>
      )
    }
  }

}
