import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import DatePicker from "react-datepicker";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { formContentAction } from '../../redux/actions/form/formActions';


// Validations
const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required().min(120),
  date: yup.string().required()
});

const Main = () => {

	const dispatch = useDispatch();
	const formItems = useSelector(state => state.formObj.formItems);
	const { register, setValue, handleSubmit, errors, control } = useForm({
		resolver: yupResolver(schema)
	});

	const loadValues = () => {
		const fields = ['title', 'description', 'date'];
		fields.forEach(field => {
			if(field === 'date') {
				setValue(field, moment(formItems[field]).toDate());
			} else {
				setValue(field, formItems[field]);
			}
		});
	};

	useEffect(() => {
		loadValues();
	}, []);

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="d-flex justify-content-center">
			<div className="col-12 mt-3">
				<h3 className="text-center">React Hooks</h3>
				<pre className="text-center">
					Yup + React-Hooks-Form + Redux
				</pre>
				<form className="needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
					<div className="form-group">
						<label htmlFor="title" className="">Title</label>
						<input type="text" className={`form-control ${errors.title ? 'is-invalid' : ''}`} name="title" id="title" onChange={e => dispatch(formContentAction(e))} ref={register} />
						{errors.title && <div className="text-danger">{errors.title?.message}</div>}
					</div>
					<div className="form-group">
						<label htmlFor="description" className="">Description</label>
						<textarea className={`form-control ${errors.description ? 'is-invalid' : ''}`} name="description" id="description" onChange={e => dispatch(formContentAction(e))} ref={register} />
						{errors.description && <div className="text-danger">{errors.description?.message}</div>}
					</div>
					<div className="form-group">
						<label htmlFor="date" className="">Date</label>
						<div>
							<Controller
								name="date"
								id="date"
								control={control}
								render={({ onChange, value }) => (
									<DatePicker
									className={`form-control ${errors.date ? 'is-invalid' : ''}`}
									selected={value}
									closeOnScroll={true}
									shouldCloseOnSelect={false}
									onChange={onChange}
									/>
									)}
							/>
							{errors.date && <div className="text-danger">{errors.date?.message}</div>}
						</div>
					</div>
					<button type="submit" className="mt-1 btn btn-primary">Send</button>
					<p className="small text-danger mt-2">* Open the DevTools and see console tab</p>
				</form>
			</div>
		</div>
	)

}

const MainComponent = Main;
export default MainComponent;
