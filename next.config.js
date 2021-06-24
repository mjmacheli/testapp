module.exports = {
    target:'serverless',
    async headers() {
        return [
            {
                source: '/.well-known/assetlinks',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/json',
                    },
                ],
            },
        ];
    },
};
