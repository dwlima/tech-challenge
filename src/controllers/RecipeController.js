module.exports = {

    async index(req, res, next) {
        /*
		const  { userid } = req.params;
        const items = await Address.find({user: userid }).sort('-name');
        */

        var items = [
            { "title": 'nome da receita 1', 'desc': 'descricao da receita 1'},
            { "title": 'nome da receita 2', 'desc': 'descricao da receita 2'}
        ]

		return res.json(items);

    }
};