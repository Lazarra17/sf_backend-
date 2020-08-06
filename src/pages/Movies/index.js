import React, { Fragment, useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, Form, Card, Row, Col, Button } from "react-bootstrap";
import { Wrapper } from "./styles";
import Select from "react-select";
import Dropzone from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useForm } from "react-hook-form";
import {
  filtersCollection,
  createMovie,
} from "../../store/modules/movies/actions";
import { useDispatch, useSelector } from "react-redux";
const TvShows = () => {
  const dispatch = useDispatch();
  const formFilters = useSelector((state) => state.calendarEventsReducer);
  useEffect(() => {
    dispatch(filtersCollection());
  }, [dispatch]);

  useEffect(() => {
    if (!formFilters.loading && formFilters.filters) {
      const filters = formFilters.filters;

      const _movieTypes = filters.movieTypes.map((d) => ({
        value: d.id,
        label: d.title,
      }));
      setMovieTypeOption(_movieTypes);
      const _casts = filters.casts.map((d) => ({
        value: d.id,
        label: d.full_name,
      }));
      setAuthorOption(_casts);
      setWriterOption(_casts);
      setCastsOption(_casts);
      const _category = filters.categories.map((d) => ({
        value: d.id,
        label: d.title,
      }));
      setCategoriesOption(_category);
      const _subCategory = filters.subCategories.map((d) => ({
        value: d.id,
        label: d.title,
      }));
      setSubCategoriesOption(_subCategory);
      const _languages = filters.subtitles.map((d) => ({
        value: d.id,
        label: d.title,
      }));
      setLanguageOption(_languages);
    }
  }, [formFilters]);

  const { register, handleSubmit, errors } = useForm();
  const [uploadMovie, setUploadMovie] = useState(null);
  const [uploadTrailer, setUploadTrailer] = useState(null);
  const [uploadSubtitle, setUploadSubtitle] = useState(null);
  const [uploadPicture, setUploadPicture] = useState(null);

  const [movieTypeOption, setMovieTypeOption] = useState([]);
  const [authorOption, setAuthorOption] = useState([]);
  const [writerOption, setWriterOption] = useState([]);
  const [castsOption, setCastsOption] = useState([]);
  const [categoriesOption, setCategoriesOption] = useState([]);
  const [subCategoriesOption, setSubCategoriesOption] = useState([]);
  const [languageOption, setLanguageOption] = useState([]);

  const [movieTypeSelect, setMovieTypeSelect] = useState([]);
  const [authorSelect, setAuthorSelect] = useState([]);
  const [writerSelect, setWriterSelect] = useState([]);
  const [castsSelect, setCastsSelect] = useState([]);
  const [categoriesSelect, setCategoriesSelect] = useState([]);
  const [subCategoriesSelect, setSubCategoriesSelect] = useState([]);
  const [languageSelect, setLanguageSelect] = useState([]);

  const handleSelectChange = (selected, type) => {
    if (type === "movie_type") setMovieTypeSelect(selected);
    if (type === "author") setAuthorSelect(selected);
    if (type === "writer") setWriterSelect(selected);
    if (type === "casts") setCastsSelect(selected);
    if (type === "categories") setCategoriesSelect(selected);
    if (type === "sub_category") setSubCategoriesSelect(selected);
    if (type === "language") setLanguageSelect(selected);
  };

  const onDropMovie = useCallback((acceptedFiles) => {
    const acceptedfile = acceptedFiles.shift();
    setUploadMovie(acceptedfile);
  }, []);

  const onDropTrailer = useCallback((acceptedFiles) => {
    const acceptedfile = acceptedFiles.shift();
    setUploadTrailer(acceptedfile);
  }, []);

  const onDropSubtitle = useCallback((acceptedFiles) => {
    const acceptedfile = acceptedFiles.shift();
    setUploadSubtitle(acceptedfile);
  }, []);

  const onDropPicture = useCallback((acceptedFiles) => {
    const acceptedfile = acceptedFiles.shift();
    setUploadPicture(acceptedfile);
  }, []);

  const onSubmit = (data) => {
    let _data = {
      movie_type: movieTypeSelect.value,
      title: data.title,
      author: authorSelect.value,
      writer: writerSelect.value,
      casts: castsSelect.value,
      categories: categoriesSelect.value,
      sub_categories: subCategoriesSelect.value,
      language: languageSelect.value,
      uploadMovie: uploadMovie,
      uploadTrailer: uploadTrailer,
      uploadSubtitle: uploadSubtitle,
      uploadPicture: uploadPicture,
    };

    // const _formData = new FormData();
    // _formData.append("movie_type", movieTypeSelect.value);
    // _formData.append("title", data.title);
    // _formData.append("author", authorSelect.value);
    // _formData.append("writer", writerSelect.value);
    // _formData.append("casts[0]", castsSelect.value);
    // _formData.append("categories[0]", categoriesSelect.value);
    // _formData.append("sub_categories[0]", subCategoriesSelect.value);
    // _formData.append("sub[0][language]", languageSelect.value);
    // _formData.append("sub[0][file]", uploadSubtitle);
    // _formData.append("video", uploadMovie);
    // _formData.append("trailer", uploadTrailer);
    // _formData.append("picture", uploadPicture);

    // console.log(_data);
    dispatch(createMovie(_data));
  };
  return (
    <Fragment>
      <Helmet>
        <title>Movie | Super Flix</title>
      </Helmet>
      <Wrapper>
        <Container className="mt-5">
          <Card>
            <Card.Header>
              <h4>Movie Upload</h4>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col md="4">
                    <Form.Group>
                      <Form.Label>Movie Type</Form.Label>
                      <Select
                        options={movieTypeOption}
                        name="movie_type"
                        className="form-select"
                        classNamePrefix="select"
                        // defaultValue={{
                        //   value: 4,
                        //   label: "cast 4",
                        // }}
                        onChange={(e) => handleSelectChange(e, "movie_type")}
                      />
                      {errors.movie_type && "Movie type is required"}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        ref={register({ required: true })}
                      />
                      {errors.title && "Title is required"}
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Author</Form.Label>
                      <Select
                        options={authorOption}
                        name="author"
                        className="form-select"
                        classNamePrefix="select"
                        onChange={(e) => handleSelectChange(e, "author")}
                      />
                      {errors.author && "Author is required"}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Writer</Form.Label>
                      <Select
                        options={writerOption}
                        name="writer"
                        className="form-select"
                        classNamePrefix="select"
                        onChange={(e) => handleSelectChange(e, "writer")}
                      />
                      {errors.writer && "Writer is required"}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Casts</Form.Label>
                      <Select
                        options={castsOption}
                        name="casts"
                        className="form-select"
                        classNamePrefix="select"
                        onChange={(e) => handleSelectChange(e, "casts")}
                      />
                      {errors.casts && "Casts is required"}
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Categories</Form.Label>
                      <Select
                        options={categoriesOption}
                        name="categories"
                        className="form-select"
                        classNamePrefix="select"
                        onChange={(e) => handleSelectChange(e, "categories")}
                      />
                      {errors.categories && "Categories is required"}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Sub Categories</Form.Label>
                      <Select
                        options={subCategoriesOption}
                        name="sub_category"
                        className="form-select"
                        classNamePrefix="select"
                        onChange={(e) => handleSelectChange(e, "sub_category")}
                      />
                      {errors.sub_category && "Sub category is required"}
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Upload Movie</Form.Label>
                      <Dropzone onDrop={onDropMovie}>
                        {({ getRootProps, getInputProps, isDragActive }) => (
                          <div
                            {...getRootProps()}
                            className={`uploader-container ${isDragActive &&
                              "open"}`}
                          >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                              <div>Drop the files here ...</div>
                            ) : (
                              <div>
                                {uploadMovie ? (
                                  uploadMovie.name
                                ) : (
                                  <span>
                                    Drag 'n' drop some files here, or click to
                                    select files
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </Dropzone>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Upload Trailer</Form.Label>
                      <Dropzone onDrop={onDropTrailer}>
                        {({ getRootProps, getInputProps, isDragActive }) => (
                          <div
                            {...getRootProps()}
                            className={`uploader-container ${isDragActive &&
                              "open"}`}
                          >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                              <div>Drop the files here ...</div>
                            ) : (
                              <div>
                                {uploadTrailer ? (
                                  uploadTrailer.name
                                ) : (
                                  <span>
                                    Drag 'n' drop some files here, or click to
                                    select files
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </Dropzone>
                    </Form.Group>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col className="row_divider">
                    <Form.Group>
                      <Form.Label>Upload Subtitle</Form.Label>
                      <Dropzone onDrop={onDropSubtitle}>
                        {({ getRootProps, getInputProps, isDragActive }) => (
                          <div
                            {...getRootProps()}
                            className={`uploader-container ${isDragActive &&
                              "open"}`}
                          >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                              <div>Drop the files here ...</div>
                            ) : (
                              <div>
                                {uploadSubtitle ? (
                                  uploadSubtitle.name
                                ) : (
                                  <span>
                                    Drag 'n' drop some files here, or click to
                                    select files
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </Dropzone>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Language</Form.Label>
                      <Select
                        options={languageOption}
                        name="language"
                        className="form-select"
                        classNamePrefix="select"
                        onChange={(e) => handleSelectChange(e, "language")}
                      />
                      {errors.language && "Language is required"}
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Movie Picture</Form.Label>
                      <Dropzone onDrop={onDropPicture}>
                        {({ getRootProps, getInputProps, isDragActive }) => (
                          <div
                            {...getRootProps()}
                            className={`uploader-container ${isDragActive &&
                              "open"}`}
                          >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                              <div>Drop the files here ...</div>
                            ) : (
                              <div>
                                {uploadPicture ? (
                                  uploadPicture.name
                                ) : (
                                  <span>
                                    Drag 'n' drop some files here, or click to
                                    select files
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </Dropzone>
                    </Form.Group>
                  </Col>
                </Row>

                <Button variant="secondary" type="submit" block>
                  <FontAwesomeIcon icon="plus-circle" /> Save
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </Wrapper>
    </Fragment>
  );
};

export default TvShows;
