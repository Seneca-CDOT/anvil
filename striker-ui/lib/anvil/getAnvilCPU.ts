import fetchJSON from '../fetchers/fetchJSON';

async function getAnvilCPU(anvilUUID: string): Promise<GetAnvilCPUResponse> {
  const response: GetAnvilCPUResponse = {
    cpu: {
      cores: 0,
      threads: 0,
      allocated: 0,
    },
    error: null,
  };

  try {
    response.cpu = await fetchJSON(
      `${process.env.DATA_ENDPOINT_BASE_URL}/get_cpu?anvil_uuid=${anvilUUID}`,
    );
  } catch (fetchError) {
    response.error = fetchError;
  }

  return response;
}

export default getAnvilCPU;
