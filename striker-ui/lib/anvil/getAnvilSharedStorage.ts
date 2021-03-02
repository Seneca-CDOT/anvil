import fetchJSON from '../fetchers/fetchJSON';

async function getAnvilSharedStorage(
  anvilUUID: string,
): Promise<GetAnvilFsResponse> {
  const response: GetAnvilFsResponse = {
    fileSystems: [],
    error: null,
  };

  try {
    response.fileSystems = await fetchJSON(
      `${process.env.DATA_ENDPOINT_BASE_URL}/get_shared_storage?anvil_uuid=${anvilUUID}`,
    );
  } catch (fetchError) {
    response.error = fetchError;
  }

  return response;
}

export default getAnvilSharedStorage;
