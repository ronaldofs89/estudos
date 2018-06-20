class TransactionView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.transactions.map(t => `
                    <tr>
                        <td>${DateHelper.dateFormat(t.date)}</td>
                        <td>${t.quantity}</td>
                        <td>${t.value}</td>
                        <td>${t.volume}</td>
                    </tr>
                `).join('')}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>${model.transactions.reduce((total, t) => total + t.volume, 0.0)}</td>
                </tr>
            </tfoot>
        </table>`;
    }
}