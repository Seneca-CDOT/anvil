import fetchJSON from '../fetchers/fetchJSON';

async function getAnvilMemory(
  anvilUUID: string,
): Promise<GetAnvilMemoryResponse> {
  const response: GetAnvilMemoryResponse = {
    memory: {
      total: 0,
      free: 0,
    },
    error: null,
  };

  try {
    response.memory = await fetchJSON(
      `${process.env.DATA_ENDPOINT_BASE_URL}/get_memory?anvil_uuid=${anvilUUID}`,
    );
  } catch (fetchError) {
    response.error = fetchError;
  }

  return response;
}

export default getAnvilMemory;
