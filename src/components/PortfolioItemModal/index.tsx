import * as React from 'react'
import * as style from './style.css'
import * as Modal from 'react-modal'
import { portfolioItems, IPortfolioItem } from '../../portfolio'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { PortfolioItem } from '../PortfolioItem/index'
import { MediaCarousel } from '../MediaCarousel/index'

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
    console.log(isOpen)    
    return (
      <Modal open={isOpen} onRequestClose={closeModal} contentLabel='Modal'>
        <div >
          {portfolioItem && (
            <div className={style.portfolioModalContent} style={{ height: isMobile ? '100%' : 'fit-content', marginTop: isMobile ? '0' : '20vh' }}>
              <MediaCarousel medias={portfolioItem.medias} />
              <h1 className={style.portfolioModalHeader}> {portfolioItem.header}</h1>
              <p className={style.modalDescription}>{portfolioItem.longDescription}</p>
              {/* {this.renderProjectSourceUrlButton(portfolioItem)}
              {this.renderProjectUrlButton(portfolioItem)}
              {this.renderCloseButton(isMobile, closeModal)} */}
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

  // private renderProjectSourceUrlButton(portfolioItem: IPortfolioItem) {
  //   if (portfolioItem.projectSourceUrl) {
  //     return <Button className={style.modalButton} raised={true} color='primary' onClick={this.openProjectSourceUrl}><i style={{marginRight: '3px'}} className='zmdi zmdi-run'/>Source</Button>
  //   }
  // }

  // private renderProjectUrlButton(portfolioItem: IPortfolioItem) {
  //   if (portfolioItem.projectUrl) {
  //     return <Button className={style.modalButton} raised={true} color='secondary' onClick={this.openProjectUrl}> <i className='zmdi zmdi-link'/> /> Project  </Button>
  //   }
  // }

  // private renderCloseButton(isMobile: boolean, closeModal: any) {
  //   if (isMobile) {
  //     return (
  //       <div className={style.closeButtonHolder}>
  //         <Button className={style.modalCloseButton} raised={true} color='default' style={{position: 'fixed'}} onClick={closeModal}><i className='zmdi zmdi-close'/></Button>
  //       </div>
  //     )
  //   }
  // }

}
