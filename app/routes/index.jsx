import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'remix';

export const loader = async () => ({ ok: true });
const Index = () => {
  const data = useLoaderData();
  useEffect(() => {}, [data]);
  const [query, setQuery] = useState('');
  return (
    <div>
      <form
        className='w-11/12 mx-auto my-0'
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div className={`mt-3 pb-1 `}>
          <label
            className={`pl-1 text-xs ${
              errors.customer_name ? 'text-error-base' : 'text-secondary-400'
            }`}
          >
            Name
          </label>
          <div
            className={`flex items-center px-2 py-1 border ${
              errors.customer_name ? 'border-error-base' : 'border-gray-300'
            } rounded-lg`}
          >
            <span className='flex items-center justify-center w-6 h-6 rounded-full bg-primary-base'>
              <Name />
            </span>
            <input
              name='customer_name'
              ref={register}
              placeholder='Enter your Name'
              className='w-11/12 py-1 pl-2 focus:outline-none'
            />
          </div>
        </div>
        {errors.customer_name && (
          <div className='text-xs text-error-base'>
            {errors.customer_name.message}
          </div>
        )}
        <div className={`mt-3 pb-1 `}>
          <label
            className={`pl-1 text-xs ${
              errors.email ? 'text-error-base' : 'text-secondary-400'
            }`}
          >
            Email
          </label>
          <div
            className={`flex items-center px-2 py-1 border ${
              errors.email ? 'border-error-base' : 'border-gray-300'
            } rounded-lg`}
          >
            <span className='flex items-center justify-center w-6 h-6 rounded-full bg-primary-base'>
              <Email />
            </span>
            <Controller
              name='email'
              control={control}
              render={({ value, onChange }) => (
                <input
                  className='w-11/12 py-1 pl-2 focus:outline-none'
                  value={value}
                  placeholder='Enter your Email Id'
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                />
              )}
            />
          </div>
        </div>
        {errors.email && (
          <div className='text-xs text-error-base'>{errors.email.message}</div>
        )}
        <div className={`mt-3 pb-1 `}>
          <label
            className={`pl-1 text-xs ${
              errors.contact_number ? 'text-error-base' : 'text-secondary-400'
            }`}
          >
            Mobile Number
          </label>
          <div
            className={`flex items-center px-2 py-1 border ${
              errors.contact_number ? 'border-error-base' : 'border-gray-300'
            } rounded-lg`}
          >
            <span className='flex items-center justify-center w-6 h-6 rounded-full bg-primary-base'>
              <Mobile />
            </span>
            <Controller
              name='contact_number'
              control={control}
              render={({ value, onChange }) => (
                <input
                  className='w-11/12 py-1 pl-2 focus:outline-none'
                  value={value}
                  placeholder='Enter your Number'
                  onChange={(e) => {
                    onChange(
                      e.target.value
                        .replace(/^0+/g, '')
                        .replace(/[^0-9]/g, '')
                        .substring(0, 10)
                    );
                  }}
                />
              )}
            />
          </div>
        </div>
        {errors.contact_number && (
          <div className='text-xs text-error-base'>
            {errors.contact_number.message}
          </div>
        )}

        <div className={`mt-3 pb-1 `}>
          <label
            className={`pl-1 text-xs ${
              errors.pincode ? 'text-error-base' : 'text-secondary-400'
            }`}
          >
            Pincode
          </label>
          <div
            className={`flex items-center px-2 py-1 border ${
              errors.contact_number ? 'border-error-base' : 'border-gray-300'
            } rounded-lg`}
          >
            <span className='flex items-center justify-center w-6 h-6 rounded-full bg-primary-base'>
              <Pincode />
            </span>
            <Controller
              name='pincode'
              control={control}
              render={({ value, onChange }) => (
                <input
                  className='w-11/12 py-1 pl-2 focus:outline-none'
                  value={value}
                  placeholder='Enter your Pincode'
                  onChange={(e) => {
                    onChange(
                      e.target.value
                        .replace(/^0+/g, '')
                        .replace(/[^0-9]/g, '')
                        .substring(0, 6)
                    );
                  }}
                />
              )}
            />
          </div>
          {errors.pincode && (
            <div className='text-xs text-error-base'>
              {errors.pincode.message}
            </div>
          )}

          <div className={`mt-5 pb-1 `}>
            <label className='pl-1 text-lg'>
              <span
                className={`text-sm ${
                  errors.need_finance ? 'text-error-base' : 'text-secondary-400'
                }`}
              >
                Get EMI Offers from OTO
              </span>
            </label>
            <div className='flex pt-1'>
              <div className='inline-flex items-center w-32'>
                <input
                  type='radio'
                  name='need_finance'
                  value='yes'
                  id='need_yes'
                  ref={register}
                  className={`border-2 mr-3 ${
                    errors.need_finance
                      ? 'border-error-base'
                      : 'border-gray-400'
                  } text-primary-base`}
                />
                <label
                  className='text-sm text-secondary-400'
                  htmlFor='need_yes'
                >
                  Yes
                </label>
              </div>
              <div className='inline-flex items-center w-32 '>
                <input
                  type='radio'
                  name='need_finance'
                  value='no'
                  id='need_no'
                  ref={register}
                  className={`border-2 mr-3 ${
                    errors.need_finance
                      ? 'border-error-base'
                      : 'border-gray-400'
                  } text-primary-base`}
                />
                <label className='text-sm text-secondary-400' htmlFor='need_no'>
                  No
                </label>
              </div>
            </div>
            {errors.need_finance && (
              <div className='text-xs text-error-base'>{`${errors.need_finance.message}`}</div>
            )}
          </div>
        </div>

        <div className='pt-2'>
          <span className='text-sm text-secondary-400 '>Available Colours</span>
          <div className='relative w-64 h-14'>
            <Image
              src='/images/bounce_color.png'
              alt='color'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <span className='text-xs italic text-secondary-400'>
            *Colour can be selected at the time of delivery
          </span>
        </div>

        <div className='flex justify-center'>
          <button
            disabled={isSubmitting}
            className='w-full py-2 text-white rounded-lg bg-primary-base'
          >
            Pay Now to Book
          </button>
        </div>
      </form>
      {JSON.stringify(data)}
    </div>
  );
};

Index.propTypes = {};

export default Index;
