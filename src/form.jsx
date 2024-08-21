import React from 'react';
import { useForm } from 'react-hook-form';

const EmployeeForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 class="text-center my-2">Employee Form</h2>
      
      



      <div className="container">
        <div className="row">
          <div className="col-4 ">
            <label>First Name:</label>
            <input className='form-control' type="text" {...register('firstName', { required: 'First Name is required' })} />
            {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
    
          </div>

          <div className="col-4">
            <label>Middle Name:</label>
            <input className='form-control' type="text" {...register('middleName')} />
          </div>

          <div className="col-4">
            <label>Last Name:</label>
            <input className='form-control' type="text" {...register('lastName', { required: 'Last Name is required' })} />
            {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
          </div>


        </div>


        <div className="row">
          <div className="col-4">
            <label>Birth Date:</label>
            <input className='form-control' type="date" {...register('birthDate', { required: 'Birth Date is required' })} />
            {errors.birthDate && <p style={{ color: 'red' }}>{errors.birthDate.message}</p>}
          </div>
          <div className="col-4">
            <label>Email:</label>
            <input className='form-control' type="email" {...register('email', { required: 'Email is required', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

          </div>
          <div className="col-4">
            <label>Phone Number:</label>
            <input className='form-control' type="tel" {...register('phoneNumber', { required: 'Phone Number is required' })} />
            {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber.message}</p>}
          </div>

        </div>




        <div className="row">
          <div className="col-4">
            <label>Gender:</label>
            <select className='form-control' {...register('gender', { required: 'Gender is required' })}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}
          </div>
          <div className="col-4">
            <label>Start Time:</label>
            <input className='form-control' type="time" {...register('startTime', { required: 'Start Time is required' })} />
            {errors.startTime && <p style={{ color: 'red' }}>{errors.startTime.message}</p>}

          </div>
          <div className="col-4">
            <label>End Time:</label>
            <input className='form-control' type="time" {...register('endTime', { required: 'End Time is required' })} />
            {errors.endTime && <p style={{ color: 'red' }}>{errors.endTime.message}</p>}
          </div>

        </div>



        <div className="row">
          <div className="col-4">
            <label>Position:</label>
            <input className='form-control' type="text" {...register('position', { required: 'Position is required' })} />
            {errors.position && <p style={{ color: 'red' }}>{errors.position.message}</p>}

          </div>
          <div className="col-4">
            <label>Team:</label>
            <select className='form-control' {...register('team', { required: 'Team is required' })}>
              <option value="">Select Team</option>
              <option value="TEAM 1">TEAM 1</option>
              <option value="TEAM 2">TEAM 2</option>
              <option value=" TEAM3">TEAM 3</option>
              
            </select>
            {errors.team && <p style={{ color: 'red' }}>{errors.team.message}</p>}

          </div>
          <div className="col-4">
            <label>Designation:</label>
            

            <select className='form-control' {...register('designation', { required: 'Designation is required' })}>
              <option value="">Select Team</option>
              <option value="HR">HR</option>
              <option value="Team leader">Team Leader</option>
              <option value="Manager">Manager</option>
              
            </select>
            {errors.designation && <p style={{ color: 'red' }}>{errors.designation.message}</p>}

          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <label>Billable Hours:</label>
            <input className='form-control' type="number" {...register('billableHours', { required: 'Billable Hours is required' })} />
            {errors.billableHours && <p style={{ color: 'red' }}>{errors.billableHours.message}</p>}

          </div>
          <div className="col-4 pt-4">
            <label > Is Billable</label>
            <input className='ms-2' type="checkbox" />

          </div>
        </div>



        <div className="row">
          <div className="col d-flex justify-content-center">
          <button className='px-5 fw-bold py-1 bg-primary text-light' type="submit">Submit</button>
          </div>
        </div>




       




      </div>

    </form>
  );
};

export default EmployeeForm;
