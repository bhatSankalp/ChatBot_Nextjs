import { useEffect } from 'react'

export const PMOChatBot =()=>{

  useEffect(()=>{
    (function (d, m) {
      var kommunicateSettings = {
        appId: '1f5fd8ca24518f4cd1c43d274d6a19686',
        popupWidget: true,
        automaticChatOpenOnNavigation: true
        // userName: 'Sankii',
        // password:'hello',
        // 'preLeadCollection': [{
        //   'field': 'Name', // Name of the field you want to add
        //   'required': true, // Set 'true' to make it a mandatory field
        //   'placeholder': 'Enter your name' // add whatever text you want to show in the placeholder
        // },
        // {
        //   'field': 'Email',
        //   'type': 'email',
        //   'required': true,
        //   'placeholder': 'Enter your email'
        // },
        // {
        //   'field': 'Phone',
        //   'type': 'number',
        //   'required': true,
        //   'element': 'input', // Optional field (Possible values: textarea or input) 
        //   'placeholder': 'Enter your phone number'
        // },
        // {
        //   'field': 'Employer', // You can add any number of custom properties
        //   'required': true,
        //   'element': 'select',
        //   'options':[{value:'value1'}, {value:'value2'}, {value:'value3'}], // Mandatory field (Incase of element:"select")
        //   'placeholder': 'Enter employer name'
        // }
        // ]
        // userId: '044w022',
        // email: 'sankalp_bhat@gmail.com',
        // displayName: 'Sankalppp 1233',
        // chatPopupMessage: [{
        //   'message': 'Overridden message', // Message to be displayed in the pre-chat popup (string)
        //   'delay': 2000                    // Delay interval of pre-chat popup (number in milliseconds)
        // }]
      }
      var s = document.createElement('script')
      s.type = 'text/javascript'
      s.async = true
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app'
      var h = document.getElementsByTagName('head')[0]
      h.appendChild(s)
      window.kommunicate = m
      m._globals = kommunicateSettings
    })(document, window.kommunicate || {})
  }, [])

  return <div></div>
}
