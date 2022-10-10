import axios from 'axios';
import { baseURL } from '../config';

/**
 * Request genérica
 * @param method: POST, GET
 * @param request : url a la que atacamos
 * @param headers: content-type
 * @param data: opcional, datos a enviar
 * @param params: opcional, datos enviados parámetros
 * @returns: devuelve respuesta correcta o error
 */

export const fetch = async (method, request, headers, data, params) => {
  return await axios
    .request({
      method,
      url: `${baseURL}${request}`,
      headers,
      data,
      params
    })
    .then((res) => res.data)
    .catch((res) => {
      return res.response.data;
    });
};
