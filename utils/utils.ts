export default class Utils {
    public static formatResponse(resp: string) {
        return resp
            .split('\n')[1]
            .split(':')[1]
            .split(',')[0]
            .replace('"', '')
            .replace('"', '')
            .trim();
    };
};
