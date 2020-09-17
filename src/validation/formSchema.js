import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(3, 'Name must be >= 3-chars!'),
    email: yup.string()
        .email('Must be a valid email')
        .required('Email is required'),
});