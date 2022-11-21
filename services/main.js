import axios from "axios";

const baseUrl = "http://localhost:3000";

export const getAllOwners = async () => {
  const resp = await axios.get(`${baseUrl}/getAllOwners`);
  return resp.data.data;
};

export const getCatsByOwner = async (ownerId) => {
  const resp = await axios.get(`${baseUrl}/getCatsByOwner/${ownerId}`);
  return resp.data.data;
};

export const getMaster = async () => {
  const resp = await axios.get(`${baseUrl}/getMaster`);
  return resp.data.data;
};

export const makeMaster = async (ownerId) => {
  const resp = await axios.patch(`${baseUrl}/makeMaster/${ownerId}`);
  return resp.data;
};

export const makeFavorite = async (ownerId) => {
  const resp = await axios.patch(`${baseUrl}/makeFavorite/${ownerId}`);
  return resp.data;
};
