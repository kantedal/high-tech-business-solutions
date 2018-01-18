import * as React from 'react'
import * as style from './style.css'
import Modal from 'material-ui/Modal'
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

export namespace PortfolioItemModal {
  export interface Props {
    portfolioItem: IPortfolioItem
    isOpen: boolean
    closeModal: () => void
  }
  export interface State { }
}

export class PortfolioItemModal extends React.Component<PortfolioItemModal.Props, PortfolioItemModal.State> {

  render() {
 
    const { portfolioItem, isOpen, closeModal } = this.props
    return (
      <Modal aria-labelledby='simple-modal-title' aria-describedby='simple-modal-description' show={isOpen} onRequestClose={closeModal}>
        <div>
          {portfolioItem && (
            <div className={style.portfolioModalContent}>
              <MediaCarousel medias={portfolioItem.medias} />
              <h1 className={style.portfolioModalHeader}> {portfolioItem.header}</h1>
              <p className={style.modalDescription}>{portfolioItem.longDescription}</p>
              {this.renderProjectSourceUrlButton(portfolioItem)}
              {this.renderProjectUrlButton(portfolioItem)}
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
      return <Button className={style.modalButton} raised={true} color='primary' onClick={this.openProjectSourceUrl}> Source <Code /> </Button>
    }
  }

  private renderProjectUrlButton(portfolioItem: IPortfolioItem) {
    if (portfolioItem.projectUrl) {
      return <Button className={style.modalButton} raised={true} color='accent' onClick={this.openProjectUrl}> Project <Run /> </Button>
    }
  }
  
}
