import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.css';
import {WinNumber,WinCity,WinPersons} from './Shared';



class SuperLoto extends Component {
    constructor(){
        super();

        this.state={
            dates:[],
            loto:{},
            error:false,
            loading:false,
            selectedOption:''
        }

        this.baseState = this.state;
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleGetSayisalLotoResult = (date) => {
        this.setState({
            loading:true
        })

        if(!date){
            date = this.state.dates[0].tarih;
        }

        let url = "http://localhost:60897/api/loto/GetSuperLotoResult/"+date;
        fetch(url).then(res => res.json())
        .then((response)=>{
            this.setState({
                error:false,
                loading:false,
                loto:response,
            })
        },(error)=>{
            console.log(error);
            this.setState({
                error:true,
                loading:false
            })
        });
    }

    handleGetSayisalLotoDates = () => {
        
        this.setState({
            loading:true
        })

        let url = "http://localhost:60897/api/loto/GetSuperLotoDates";
        fetch(url).then(res => res.json())
        .then((response)=>{
           
            this.setState({
                error:false,
                loading:true,
                dates:response
            });

            this.handleGetSayisalLotoResult();
        },(error)=>{
            console.log(error);
            this.setState({
                error:true,
                loading:false
            })
        });
    }

    componentWillMount = () => {
        this.handleGetSayisalLotoDates();
    }

    handleChange = (event) =>{
        this.setState({
            selectedOption:event.target.value
        })

        this.handleGetSayisalLotoResult(event.target.value);
    }

    handleRefresh = () => {
        this.setState(this.baseState);
        this.handleGetSayisalLotoDates();
    }

    render = () => {
        const {loto,dates,loading,error} = this.state;

        if(error){
            return(
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <h1 className="display-4">Sayisal Loto Çekiliş Sonuçları</h1>
                    <hr className="my-4"/>
                    <div className="lead">
                        Sunucuya bağlanırken sorun meydana geldi.  
                        <button className="btn btn-info" onClick={this.handleRefresh}><i class="fa fa-refresh"></i></button>
                    </div>
                    </div>
                </div>
            
            )
        }else if(loading){
            return(
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <h1 className="display-4">Sayisal Loto Sonuçları</h1>
                    <hr className="my-4"/>
                    <div className="lead">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group row">
                                    <label htmlFor="staticEmail" className="col-sm-4 col-form-label font-weight-normal">Çekiliş Tarihi</label>
                                    <div className="col-sm-8">
                                        <select className="form-control" 
                                        onChange={this.handleChange}
                                        value={this.state.selectedOption}>
                                            {
                                                dates.map((item)=>
                                                    <option key={item.tarih} value={item.tarih}>{item.tarihView}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="staticEmail" className="col-sm-4 font-weight-normal">Hafta</label>
                                    <div className="col-sm-8">
                                        <p className="col-form-label">Yükleniyor...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-4"/>
                        <div className="row">
                            <div className="offset-sm-4 col-sm-8">
                               Yükleniyor...
                            </div>
                        </div>
                        <hr className="my-4"/>
                        <div className="row">
                            Yükleniyor...
                        </div>
                        <hr className="my-4"/>
                        <div className="row">
                            Yükleniyor...
                        </div>
                    </div>
                    </div>
                </div>
            )
        }

        const winNumberArray = loto.data.rakamlarNumaraSirasi.split(' - ');

        return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Sayisal Loto Sonuçları</h1>
              <hr className="my-4"/>
              <div className="lead">
                  <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-4 col-form-label font-weight-normal">Çekiliş Tarihi</label>
                            <div className="col-sm-8">
                                <select className="form-control" 
                                onChange={this.handleChange}
                                value={this.state.selectedOption}>
                                    {
                                        this.state.dates.map((item)=>
                                            <option key={item.tarih} value={item.tarih}>{item.tarihView}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-4 font-weight-normal">Hafta</label>
                            <div className="col-sm-8">
                                <p className="col-form-label">{loto.data.hafta}</p>
                            </div>
                        </div>
                    </div>
                  </div>
                  <hr className="my-4"/>
                  <div className="row">
                      <div className="offset-sm-4 col-sm-8">
                          {
                            winNumberArray.map((number,index) =>
                                <WinNumber key={index} number={number} />
                            )
                          }
                      </div>
                  </div>
                  <hr className="my-4"/>
                  <div className="row">
                      {
                          loto.data.buyukIkrKazananIlIlceler.map((item,index)=>
                            <WinCity key={index} {...item} />
                          )
                      }
                  </div>
                  <hr className="my-4"/>
                  <div className="row">
                     {
                         loto.data.bilenKisiler.map((item,index)=>
                            <WinPersons key={index} {...item} />
                         )
                     }
                  </div>
              </div>
            </div>
          </div>
        )
    }
}

export default SuperLoto;