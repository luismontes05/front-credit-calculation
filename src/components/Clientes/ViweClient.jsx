import React, {useState, useEffect} from 'react';

function ViweClient(){

    return(

        <React.Fragment>
            <div className="modal fade" id="ModalViweClient" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-body d-flex justify-content-center align-items-center modal-body-formDataClient">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="btn-close-modal"></button>
                            <hr></hr>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default ViweClient