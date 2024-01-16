export default function reducer(state, action) {

    switch (action.type) {
        case 'add': {
            const { ...text } = action.payload;

            return [
                ...state,
                {
                    id: crypto.randomUUID(),
                    action: text.actionValue,
                    price: parseInt(text.priseValue),
                },
            ];
        }
        case 'delet': {
            const id = action.payload;
            return state.filter((elem) => elem.id !== id);
        }

        case 'update': {
            const { ...text } = action.payload;
            const { id, actionValue, priseValue } = text;

            return state.map((elem) =>
                elem.id === id
                    ? {
                          id: id,
                          action: actionValue,
                          price: priseValue,
                      }
                    : elem
            );
        }

        case 'filter': {
            const text = action.payload;
            // let filterData = [];

            state.map((elem) => {
                elem.action.split(' ').map((item) => {
                    if (
                        item.toLowerCase().slice(0, 3) ===
                        text.toLowerCase().slice(0, 3)
                    ) {
                        filterData.push(elem);
                    }
                });
            });

            return filterData;
        }

        case 'show': {
            return action.payload
        }

        default:
            return state;
    }
}
