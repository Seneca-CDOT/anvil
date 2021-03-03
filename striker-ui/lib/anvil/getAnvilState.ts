import fetchJSON from '../fetchers/fetchJSON';

async function getAnvilState(
  anvilUUID: string,
): Promise<GetAnvilStateResponse> {
  const response: GetAnvilStateResponse = {
    anvilState: {
      state: 'degraded',
    },
    error: null,
  };

  try {
    response.anvilState = await fetchJSON(
      `${process.env.DATA_ENDPOINT_BASE_URL}/get_state?anvil_uuid=${anvilUUID}`,
    );
  } catch (fetchError) {
    response.error = fetchError;
  }

  return response;
}

export default getAnvilState;
