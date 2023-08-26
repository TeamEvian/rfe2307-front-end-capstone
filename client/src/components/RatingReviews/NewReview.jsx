import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactStars from 'react-stars';

const NewReview = ({ productID, form, setForm, meta }) => {

  const [name, setName] = useState('selected product');
  const [rating, setRating] = useState(0);
  const [inputPhotos, setInputPhotos] = useState(false);
  const [images, setImages] = useState([]);

  const changeForm = () => {
    setForm(!form);
  };

  const getName = () => {
    axios.get(`/products/${productID}`, { params: { productID: productID } })
      .then(res => setName(res.data.name))
      .catch(err => console.log('failed client get product name req', err));
  };

  useEffect(() => {
    getName();
  }, []);

  const handleRating = (newRating) => {
    setRating(newRating);
    console.log(typeof rating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let rec = false;
    if (e.target.rec.value === 'yes') {
      rec = true;
    }

    const sizeRadio = e.target.querySelector('[name="sizeRadio"]:checked');
    const widthRadio = e.target.querySelector('[name="widthRadio"]:checked');
    const comfortRadio = e.target.querySelector('[name="comfortRadio"]:checked');
    const qualityRadio = e.target.querySelector('[name="qualityRadio"]:checked');
    const lengthRadio = e.target.querySelector('[name="lengthRadio"]:checked');
    const fitRadio = e.target.querySelector('[name="fitRadio"]:checked');

    const sizeRadioValue = sizeRadio ? sizeRadio.value : null;
    const widthRadioValue = widthRadio ? widthRadio.value : null;
    const comfortRadioValue = comfortRadio ? comfortRadio.value : null;
    const qualityRadioValue = qualityRadio ? qualityRadio.value : null;
    const lengthRadioValue = lengthRadio ? lengthRadio.value : null;
    const fitRadioValue = fitRadio ? fitRadio.value : null;

    let newRev = {
      'product_id': productID,
      rating: rating,
      summary: e.target.summary.value,
      body: e.target.body.value,
      recommend: rec,
      name: e.target.nickname.value,
      email: e.target.email.value,
      photos: ['https://shorturl.at/mvQ48', 'https://shorturl.at/nuwDU'],
      // need to make this conditional based on meta.characteristics keys
      // characteristics: {
      //   '123': sizeRadioValue,
      //   '456': widthRadioValue,
      //   '789': comfortRadioValue,
      //   '012': qualityRadioValue,
      //   '345': lengthRadioValue,
      //   '678': fitRadioValue
      // }
    };

    axios.post(`/reviews/${productID}`, { data: newRev }, { params: { id: productID } })
      .then(res => {
        changeForm();
        alert('Thank you for your review!');
      })
      .catch(err => console.log('Cannot post new review', err));
  };

  const photos = () => {
    return (
      <div>
        {images.length <= 5 && (
          <div className="flex space-x-2">
            {images.map((img, index) => {
              console.log(img);
              return <img key={index} alt="thumbnail"
                width={60} height={60}
                src={URL.createObjectURL(img)} />;
            })}
          </div>
        )}
        {!inputPhotos && (
          <button onClick={(e) => setInputPhotos(true)} className='m-1 py-[.438rem] px-2 w-40 mx-auto inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500'>Upload Photos</button>
        )}
      </div>
    );
  };

  const chars = (data) => {
    const char = data.characteristics;
    return (
      <div>
        <div className='text-lg font-semibold'>Characteristics</div>
        {char.Size && (
          <label><div className='font-medium'>Size:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='sizeRadio' value='1'/>1 - A size too small</label>
              <label><input type='radio' name='sizeRadio' value='2'/>2 - Half a size too small</label>
              <label><input type='radio' name='sizeRadio' value='3'/>3 - Perfect</label>
              <label><input type='radio' name='sizeRadio' value='4'/>4 - Half a size too big</label>
              <label><input type='radio' name='sizeRadio' value='5'/>5 - A size too big</label>
            </div>
          </label>
        )}
        {char.Width && (
          <label><div className='font-medium'>Width:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='widthRadio' value='1'/>1 - Too narrow</label>
              <label><input type='radio' name='widthRadio' value='2'/>2 - Slightly narrow</label>
              <label><input type='radio' name='widthRadio' value='3'/>3 - Perfect</label>
              <label><input type='radio' name='widthRadio' value='4'/>4 - Slightly wide</label>
              <label><input type='radio' name='widthRadio' value='5'/>5 - Too wide</label>
            </div>
          </label>
        )}
        {char.Comfort && (
          <label><div className='font-medium'>Comfort:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='comfortRadio' value='1'/>1 - Uncomfortable</label>
              <label><input type='radio' name='comfortRadio' value='2'/>2 - Slightly uncomfortable</label>
              <label><input type='radio' name='comfortRadio' value='3'/>3 - Ok</label>
              <label><input type='radio' name='comfortRadio' value='4'/>4 - Comfortable</label>
              <label><input type='radio' name='comfortRadio' value='5'/>5 - Perfect</label>
            </div>
          </label>
        )}
        {char.Quality && (
          <label><div className='font-medium'>Quality:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='qualityRadio' value='1'/>1 - Poor</label>
              <label><input type='radio' name='qualityRadio' value='2'/>2 - Below average</label>
              <label><input type='radio' name='qualityRadio' value='3'/>3 - What I expected</label>
              <label><input type='radio' name='qualityRadio' value='4'/>4 - Pretty great</label>
              <label><input type='radio' name='qualityRadio' value='5'/>5 - Perfect</label>
            </div>
          </label>
        )}
        {char.Length && (
          <label><div className='font-medium'>Length:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='lengthRadio' value='1'/>1 - Runs short</label>
              <label><input type='radio' name='lengthRadio' value='2'/>2 - Runs slightly short</label>
              <label><input type='radio' name='lengthRadio' value='3'/>3 - Perfect</label>
              <label><input type='radio' name='lengthRadio' value='4'/>4 - Runs slightly long</label>
              <label><input type='radio' name='lengthRadio' value='5'/>5 - Runs long</label>
            </div>
          </label>
        )}
        {char.Fit && (
          <label><div className='font-medium'>Fit:</div>
            <div className='flex flex-col'>
              <label><input type='radio' name='fitRadio' value='1'/>1 - Runs tight</label>
              <label><input type='radio' name='fitRadio' value='2'/>2 - Runs slightly tight</label>
              <label><input type='radio' name='fitRadio' value='3'/>3 - Perfect</label>
              <label><input type='radio' name='fitRadio' value='4'/>4 - Runs slightly loose</label>
              <label><input type='radio' name='fitRadio' value='5'/>5 - Runs loose</label>
            </div>
          </label>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="modal">
        <div onClick={changeForm} className="w-100vw h-100vh top-0 left-0 right-0 bottom-0 fixed bg-neutral-600 opacity-70"></div>
        <div className="fixed bottom-20 right-2/4 translate-x-2/4 leading-6 bg-neutral-50 border-4 rounded overflow-hidden" style={{ width: '50%', height: '80vh', overflowY: 'auto' }}>
          <h1 className="flex justify-center text-2xl font-bold m-2">New Review</h1>
          <p className="flex justify-center text-sm ml-2">About the {name}</p>
          <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
            <span className='text-lg font-semibold'>
              Rating: <ReactStars count={5} half={false} size={24} onChange={handleRating} />
              <p className="text-xs">Double Click Please</p>
            </span>
            <div>
              <label>
                <div className='text-lg font-semibold'>Do you recommend this product?</div>
                <label><input type='radio' name='rec' value='yes' defaultChecked={true} />Yes</label>
                <label><input type='radio' name='rec' value='no' />No</label>
              </label>
            </div>
            <div>
              <label>
                <div className='text-lg font-semibold'>Summary:</div>
                <input name='summary' maxLength={60} className='border w-80' placeholder='Write a title here...' /></label>
            </div>
            <div>
              <div><label className='text-lg font-semibold'>Body: </label></div>
              <div>
                <textarea name='body' className='border w-80' minLength={60} maxLength={1000} placeholder='Let us know your thoughts!' />
              </div>
            </div>
            {meta && chars(meta)}
            <div className="flex flex-col items-center justify-center">
              {inputPhotos && (
                <div>
                  <div className='font-semibold'>Choose up to 5!</div>
                  <div>
                    <input type='file' name='photo' onChange={(e) => setImages([...images, ...Array.from(e.target.files)])} multiple />
                  </div>
                </div>
              )}
              {images.length <= 5 && photos()}
            </div>
            <label>Nickname: <input className='w-64' name='nickname' placeholder='User123' /></label>
            <label>Email:
              <input required type="email" name='email' className="m-2 w-64" placeholder="Example: jack@email.com"></input>
            </label>
            <span className="m-2 text-xs">For authentication reasons, you will not be emailed</span>

            <button role='submit' type='submit' className='m-1 py-[.688rem] px-4  items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500'>Submit Review</button>
          </form>
          <button onClick={changeForm} className="h-7 absolute top-1 right-1 px-2 m-1 py-[.688rem] inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white bg-red-500 hover:border-red-500 transition-all text-sm dark:border-gray-700 dark:hover:border-red-500">
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default NewReview;