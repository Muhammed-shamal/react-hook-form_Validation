export const data = {
    Timestamp: new Date().toLocaleString(), emailAddress: "", fullName: '',
    houseOwner: '', houseName: '', houseNo: '', landMark: '', വിവാഹിതരുടെ_എണ്ണം: '', അവിവാഹിതരുടെ_എണ്ണം: '', ContactNo: '',
    whatsAppNo: '',
}

export const validateUname = {
    required: { value: true, message: "This field is required" },
    minLength: { value: 3, message: "please enter at least 3 characters" },
    maxLength: { value: 30, message: "please enter maximum 30 characters" },
    pattern: { value: /^[a-zd]+$/i, message: "please enter a valid username" },
};


export const validateAddress = {
    required: { value: true, message: "This field is required" },
    minLength: { value: 10, message: "please enter at least 10 characters" },
    maxLength: { value: 80, message: "please enter maximum 50 characters" },
};

export const validateEmail = {
    required: { value: true, message: "This field is required" },
    minLength: { value: 8, message: "please enter at least 8 characters" },
    maxLength: { value: 15, message: "please enter maximum 15 characters" },
    pattern: {
        value: [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/],
        message: "please enter a valid email address",
    },
};

export const validatePhoneNo = {
    required: { value: true, message: "This field is required" },
    minLength: { value: 10, message: "please enter at least 3 characters" },
    maxLength: { value: 10, message: "please enter maximum 30 characters" },
    pattern: { value: /^\d{10}/, message: "This mobile number is not valid" },
};








