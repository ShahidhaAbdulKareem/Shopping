import React, { Component } from 'react'
export const DataContext = React.Context();
export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Passport Registrtion",
                "src": "https://thumbs.dreamstime.com/b/untitled-passport-vector-icon-145316830.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content":"Welcome",
                "price":23,
                "color": ["red","black","crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Voter Id",
                "src": "https://lh3.googleusercontent.com/H1uZdkgaCecY2jWkxUvPIf8jRMGCsUFYAeKlfye4lwYuKygNalcA1ahu_F9DhNxCjus7",
                "description": "UI/UX designing, html css tutorials",
                "content":"Welcome",
                "price":23,
                "color": ["red","black","crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Income Tax Return",
                "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPS8FMT0NI2IxophpiCjzMYmPgI7LNZFkOw&usqp=CAU",
                "description": "UI/UX designing, html css tutorials",
                "content":"Welcome",
                "price":23,
                "color": ["red","black","crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "GST Registrtion",
                "src": "https://5.imimg.com/data5/IC/DA/HY/SELLER-80513822/gst-registration-500x500.png",
                "description": "UI/UX designing, html css tutorials",
                "content":"Welcome",
                "price":23,
                "color": ["red","black","crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Trademark Registrtion",
                "src": "https://5.imimg.com/data5/IP/ML/AP/SELLER-64394913/trademark-registration-500x500.png",
                "description": "UI/UX designing, html css tutorials",
                "content":"Welcome",
                "price":23,
                "color": ["red","black","crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "PAN Card Registrtion",
                "src": "https://www.professionalutilities.com/images/17.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content":"Welcome",
                "price":23,
                "color": ["red","black","crimson", "teal"],
                "count": 1
            }
        ]
    }
    render() {
        return (
           <DataContext.Proviser>
            {this.props.children}   
           </DataContext.Proviser>
        )
    }
}


