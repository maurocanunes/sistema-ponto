export const getUserList = async (user_id: string | undefined) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    user_id,
  });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(
    'https://ojy7sxu8zd.execute-api.us-east-2.amazonaws.com/test/',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result);
    })
    .catch((error) => console.error(error));

  return response;
};

export const getTodayWork = async (user_id: string | undefined) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    user_id,
    getToday: true,
  });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(
    'https://ojy7sxu8zd.execute-api.us-east-2.amazonaws.com/test/',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const todayWorked = JSON.parse(result);
      return todayWorked[0];
    })
    .catch((error) => {
      console.error(error);
      return null;
    });

  return response;
};

export const setHour = async (
  user_id: string | undefined,
  hour: string,
  minute: string,
  is_start: boolean
) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    user_id,
    hour,
    minute,
    is_start,
  });

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(
    'https://ojy7sxu8zd.execute-api.us-east-2.amazonaws.com/test/',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result);
    })
    .catch((error) => console.error(error));
  if (is_start) {
    return response.item.start_time;
  }
  return response.item.end_time;
};
