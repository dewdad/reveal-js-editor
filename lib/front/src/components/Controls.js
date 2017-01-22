import React from 'react';
import {connect} from 'react-redux';
import {openFile, saveProject} from '../actions/fileActions';
import {getLabels} from '../selectors';

import Notification from './Notification';

const mapStateToProps = (state) => ({
   labels: getLabels(state)
});

const mapDispatchToProps = dispatch => ({
   openFile: () => dispatch(openFile()),
   saveProject: () => dispatch(saveProject()) 
});

class Controls extends React.Component {
   render() {
      return (
         //<div className="buttonsContainer">
         //   <button id="reset" onClick={()=>this.props.reset()}>Reset</button>
         //   <button id="newGame" onClick={()=>this.props.newGame(this.props.animals)}>New game</button>        
         //</div>
         <section className="controls">
            <button id="openFile" onClick={()=>this.props.openFile()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" className="icon icon--openFile">
                    <path d="M41.998 17.676c.817-.715 1.884-1.108 3.004-1.108 1.118 0 2.186.394 3.003 1.108l17.39 15.22c.48.422.77 1.007.813 1.646.042.64-.167 1.255-.59 1.737-.836.953-2.423 1.06-3.38.222l-14.84-12.988V58.9c0 1.32-1.075 2.396-2.396 2.396-1.32 0-2.396-1.074-2.396-2.396V23.514l-14.844 12.99c-.96.837-2.542.73-3.382-.228-.87-.994-.768-2.51.226-3.38l17.392-15.22zM74.832 68.64H15.168c-1.322 0-2.397 1.074-2.397 2.397 0 1.32 1.078 2.396 2.4 2.396h59.664c1.322 0 2.396-1.074 2.396-2.396 0-1.323-1.075-2.396-2.397-2.396z"/>					
                </svg>
                <span className="button-text text">{this.props.labels['Open markdown file']}</span>
            </button>
            <button id="savePresentation" onClick={()=>this.props.saveProject()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" className="icon icon--savePresentation">
                   <path d="M41.998 60.188c.817.715 1.884 1.108 3.004 1.108 1.118 0 2.186-.394 3.003-1.108l17.39-15.22c.48-.422.77-1.007.813-1.646.042-.64-.167-1.255-.59-1.737-.836-.956-2.423-1.063-3.38-.225l-14.84 12.988V18.964c0-1.32-1.075-2.396-2.396-2.396-1.32 0-2.396 1.074-2.396 2.396V54.35L27.762 41.36c-.96-.837-2.542-.73-3.382.228-.87.994-.768 2.51.226 3.38l17.392 15.22zm32.834 8.452H15.168c-1.322 0-2.397 1.074-2.397 2.397 0 1.32 1.078 2.396 2.4 2.396h59.664c1.322 0 2.396-1.074 2.396-2.396 0-1.323-1.075-2.396-2.397-2.396z"/>
                </svg>
                <span className="button-text text">{this.props.labels['Save presentation']}</span>
             </button>
             <button id="insertSlide">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" className="icon icon--insertSlide">
                   <path id="path4140"
         d="m 9.23633,17.3262 a 0.852811,0.852811 0 0 0 -0.85352,0.8535 l 0,53.6426 a 0.852811,0.852811 0 0 0 0.85352,0.8535 l 71.52737,0 a 0.852811,0.852811 0 0 0 0.8535,-0.8535 l 0,-53.6426 a 0.852811,0.852811 0 0 0 -0.8535,-0.8535 l -71.52737,0 z m 2.64257,3.4941 66.2422,0 0,48.3613 -66.2422,0 0,-48.3613 z m 6.2988,5.4473 a 0.852811,0.852811 0 0 0 -0.8535,0.8535 l 0,35.7598 a 0.852811,0.852811 0 0 0 0.8535,0.8535 l 53.6446,0 a 0.852811,0.852811 0 0 0 0.8535,-0.8535 l 0,-35.7598 a 0.852811,0.852811 0 0 0 -0.8535,-0.8535 l -53.6446,0 z m 1.7481,2.6015 50.1484,0 0,32.2657 -50.1484,0 0,-32.2657 z m 17.9219,3.6563 a 0.852811,0.852811 0 0 0 -0.8536,0.8535 l 0,8.9395 a 0.852811,0.852811 0 0 0 0.8536,0.8535 l 5.4043,0 0,0.9746 -8.0879,0 a 0.852811,0.852811 0 0 0 -0.8536,0.8555 l 0,0.8632 a 0.852811,0.852811 0 0 0 -0,0.029 l 0,1.8282 -5.4043,0 a 0.852811,0.852811 0 0 0 -0.8535,0.8535 l 0,8.9394 a 0.852811,0.852811 0 0 0 0.8535,0.8535 l 13.4102,0 a 0.852811,0.852811 0 0 0 0.8535,-0.8535 l 0,-8.9394 a 0.852811,0.852811 0 0 0 -0.8535,-0.8535 l -5.4043,0 0,-0.9747 15.2832,0 0,0.9747 -5.4082,0 a 0.852811,0.852811 0 0 0 -0.8535,0.8535 l 0,8.9394 a 0.852811,0.852811 0 0 0 0.8536,0.8535 l 13.4082,0 a 0.852811,0.852811 0 0 0 0.8535,-0.8535 l 0,-8.9394 a 0.852811,0.852811 0 0 0 -0.8535,-0.8535 l -5.4024,0 0,-1.8282 a 0.852811,0.852811 0 0 0 -0,-0.029 l 0,-0.8652 a 0.852811,0.852811 0 0 0 -0.8535,-0.8535 l -8.086,0 0,-0.9746 5.4043,0 a 0.852811,0.852811 0 0 0 0.8535,-0.8535 l 0,-8.9395 a 0.852811,0.852811 0 0 0 -0.8535,-0.8535 l -13.4101,0 z m 1.748,2.5996 9.9141,0 0,5.4473 -9.9141,0 0,-5.4473 z m -8.9414,15.1992 9.916,0 0,5.4453 -9.916,0 0,-5.4453 z m 17.8809,0 9.916,0 0,5.4453 -9.916,0 0,-5.4453 z" />
    
                </svg>
                <span className="button-text text">{this.props.labels['Insert slide']}</span>
             </button>
             <button id="insertImage">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" className="icon icon--insertImage">
                   <path id="path4142" d="m 14.4707,17.6621 c -2.8548,0 -5.13672,2.3552 -5.13672,5.1348 l 0,44.4062 c 0,2.8547 2.35712,5.1348 5.13672,5.1348 l 61.0586,0 c 2.8548,0 5.1367,-2.3552 5.1367,-5.1348 l 0,-44.4062 c 0,-2.8199 -2.3167,-5.1348 -5.1367,-5.1348 l -61.0586,0 z m -0,4.7168 61.0605,0 c 0.2251,0 0.416,0.1338 0.416,0.418 l 0,44.4062 a 1.52558,1.52558 0 0 0 0,0 c -0,0.2255 -0.133,0.416 -0.4141,0.416 l -61.0605,0 c -0.2286,0 -0.4199,-0.1356 -0.4199,-0.418 l 0,-44.4062 c 0,-0.2252 0.1354,-0.418 0.418,-0.418 z" />
         <path id="path4144"
         d="m 41.6699,25.3418 c -4.7219,0 -8.6269,3.9157 -8.6269,8.6953 0,4.7661 3.8578,8.625 8.625,8.625 a 1.13103,1.13103 0 0 0 0.4472,-0.092 c 4.5577,-0.2473 8.1778,-3.9827 8.1778,-8.5332 0,-4.7793 -3.9029,-8.6953 -8.6231,-8.6953 z m 0,4.0664 c 2.5831,0 4.6289,2.0312 4.6289,4.6992 0,2.5827 -2.0458,4.627 -4.6289,4.627 -2.5869,0 -4.6289,-2.042 -4.6289,-4.6289 0,-2.6664 2.0423,-4.6973 4.6289,-4.6973 z m 19.1172,4.5723 c -0.824,-0.1944 -1.4112,0.1124 -1.875,0.5761 a 1.13103,1.13103 0 0 0 -0.072,0.078 L 44.3203,52.1895 36.7305,45.4707 a 1.13103,1.13103 0 0 0 -0.045,-0.037 c -0.7491,-0.598 -1.8407,-0.598 -2.5898,0 a 1.13103,1.13103 0 0 0 -0.068,0.061 l -15.6835,14.709 a 1.13103,1.13103 0 0 0 -0.025,0.025 c -0.7754,0.7754 -0.7975,1.9483 -0.1543,2.7539 a 1.13103,1.13103 0 0 0 0.088,0.098 c 0.774,0.7696 1.9428,0.7944 2.75,0.1523 a 1.13103,1.13103 0 0 0 0.07,-0.059 l 14.3691,-13.4511 7.7637,6.9433 a 1.13103,1.13103 0 0 0 0.1191,0.092 c 0.3561,0.242 0.8003,0.4043 1.2578,0.4043 0.714,0 1.169,-0.2607 1.5625,-0.8496 l -0.068,0.092 13.7011,-16.5625 8.8692,22.502 a 1.13103,1.13103 0 0 0 0,0.01 c 0.3231,0.8031 1.0826,1.2656 1.8828,1.2656 0.1396,0 0.58,-0.053 0.8555,-0.1914 0.4316,-0.2165 0.7753,-0.5499 0.9902,-1 0.2154,-0.451 0.2699,-1.082 -0,-1.627 l 0.043,0.092 -10.1309,-25.6738 a 1.13103,1.13103 0 0 0 -0.043,-0.094 c -0.2339,-0.4633 -0.7785,-0.9948 -1.457,-1.1425 z" />
                </svg>
                <span className="button-text text">{this.props.labels['Insert image']}</span>
             </button>
             <button id="previewWin">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" className="icon icon--preview">
                   <path d="M45 21.284C59.67 22.244 73.508 34.52 83.114 45 73.217 55.186 59.892 68.082 45 68.716 28.06 68.716 6.886 45 6.886 45h4.664l1.29 1.296c2.733 2.7 5.725 5.402 8.867 7.916 5.507 4.407 10.868 7.742 15.773 9.572 2.732 1.02 5.253 1.544 7.52 1.544 2.267 0 4.788-.523 7.52-1.544 4.905-1.83 10.266-5.165 15.773-9.572 3.142-2.514 6.134-5.215 8.867-7.916L78.45 45l-1.29-1.296c-2.733-2.7-5.725-5.402-8.867-7.917-5.507-4.406-10.868-7.74-15.773-9.572-2.732-1.02-5.253-1.543-7.52-1.543-2.267 0-4.788.523-7.52 1.543-4.905 1.83-10.266 5.166-15.773 9.572-3.142 2.515-6.134 5.216-8.867 7.917L11.55 45H6.887S28.06 21.284 45 21.284zm0 17.364c3.508 0 6.352 2.844 6.352 6.352 0 3.508-2.844 6.352-6.352 6.352-3.508 0-6.352-2.844-6.352-6.352 0-3.508 2.844-6.352 6.352-6.352zm0-6.353c-7.016 0-12.705 5.69-12.705 12.705 0 7.016 5.69 12.705 12.705 12.705 7.016 0 12.705-5.69 12.705-12.705 0-7.016-5.69-12.705-12.705-12.705z"/>
                </svg>
                <span className="button-text text">{this.props.labels['Open preview window']}</span>
             </button>
             
            <Notification />
        </section>
      );
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);