import fetchJSON from '../fetchers/fetchJSON';

async function getAnvilReplicatedStorage(
  anvilUUID: string,
): Promise<GetAnvilReplicatedStorageResponse> {
  const response: GetAnvilReplicatedStorageResponse = {
    resources: [],
    error: null,
  };

  try {
    response.resources = await fetchJSON(
      `${process.env.DATA_ENDPOINT_BASE_URL}/get_storage_storage?anvil_uuid=${anvilUUID}`,
    );
  } catch (fetchError) {
    response.error = fetchError;
  }

  return response;
}

export default getAnvilReplicatedStorage;
