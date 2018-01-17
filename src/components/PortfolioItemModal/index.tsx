import * as React from 'react'
import * as style from './style.css'
import Modal from 'material-ui/Modal'
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { PortfolioItem } from '../PortfolioItem/index';
import { MediaCarousel } from '../MediaCarousel/index'

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
    
              <MediaCarousel medias={portfolioItem.medias}/>
            <h1 className={style.portfolioModalHeader}> {portfolioItem.header}</h1>
            <p className={style.modalDescription}>{portfolioItem.longDescription}</p>
          </div>
        )}
        </div>
      </Modal>
    )
  }
}
