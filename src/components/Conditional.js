import React from 'react';

const conditional = (props) => {
    const dress = props.dress;
    
    let panjabi;
    if(dress){
        panjabi = <div className="">
                        <h2>Panjabi</h2>
                        <p>Color: White</p>
                  </div>
    }
    else{
        panjabi = <div className="">
                        <h2>T-shirt</h2>
                        <p>Color: Black</p>
                    </div>
    }

    // const panjabi2 = dress? <div className="">
    //                             <h2>Payjama</h2>
    //                             <p>Color: White</p>
    //                         </div>
    //                     : <div className="">
    //                         <h2>Jeans</h2>
    //                         <p>Color: Black</p>
    //                       </div>;

    return (
        <div>

            <div className="">
                {
                    panjabi
                }
            </div>

            <div className="">
                {
                            dress? <div className="">
                                        <h2>Payjama</h2>
                                        <p>Color: White</p>
                                    </div>
                                    : <div className="">
                                        <h2>Jeans</h2>
                                        <p>Color: Black</p>
                                    </div>
                }
            </div>

            <div className="">
                <h2>Price</h2>
                {
                    dress && <p>7000/=</p>
                }
            </div>
        </div>
    );
};

export default conditional;