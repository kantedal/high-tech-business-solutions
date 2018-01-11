import * as React from 'react'
import { CSSProperties } from 'react'
import * as style from './style.css'
import Modal from 'material-ui/Modal';
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { Grid, Row, Col } from 'react-flexbox-grid'

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
    console.log(portfolioItem)
    return (
      <Modal aria-labelledby='simple-modal-title' aria-describedby='simple-modal-description' show={isOpen} onRequestClose={closeModal}>
        <div>
        {portfolioItem && (
          <div className={style.portfolioModalContent}>
            <div className={style.topImageContent}>
              <img className={style.topModalImage} src={portfolioItem.imagePaths[0]}/> 
            </div>  
          </div>
        )}
        </div>
      </Modal>
    )
  }
}
