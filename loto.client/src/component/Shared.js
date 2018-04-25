import React, {Fragment} from 'react';

export function WinNumber(props){

    let result = '';
    if(props.number.indexOf('<b>')>-1){
        let numb = props.number.replace('<b>','').replace('</b>','');
        result = <Fragment>+<span className="badge badge-pill badge-primary m-2">{numb}</span></Fragment> ;
    }else{
        result = <span className="badge badge-pill badge-primary m-2">{props.number}</span>
    }
    return result;
}

export function WinCity(props){
    return(
        <Fragment>
            <div className="col-sm-4 font-weight-normal">Büyük İkramiye Kazanan İl/ İlçe:</div>
            <div className="col-sm-8">{props.ilView} / {props.ilceView}</div>
        </Fragment>
    )
}

export function WinPersons(props){
    let personCountDef = props.tur.replace('$','').replace('_BILEN','').replace('_','+');

    return(
        <Fragment>
            <div className="col-sm-3 font-weight-normal">{personCountDef} bilen kişi sayısı :</div>
            <div className="col-sm-1">{numberWithBlank(props.kisiSayisi)}</div>
            <div className="col-sm-5 font-weight-normal">Kişi başına düşen ikramiye tutarı:</div>
            <div className="col-sm-3">{numberWithCommas(Number(props.kisiBasinaDusenIkramiye).toFixed(2))} TL</div>
        </Fragment>
    )
}


const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  

  const numberWithBlank = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  