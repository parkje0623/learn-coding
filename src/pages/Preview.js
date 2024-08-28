import '../styles/preview.css';
import fs from 'fs';
import path from 'path';

export async function getServerSideProps(context) {
    const { fileName } = context.query;
    const filePath = path.join(process.cwd(), 'public', 'example_data', fileName);
    let htmlContent = '';

    try {
        htmlContent = fs.readFileSync(filePath, 'UTF8');
    } catch (errorr) {
        console.error('Error reading HTML preview file: ', error);
    }

    return {
        props: {
            htmlContent
        }
    };
}

function Preview({ htmlContent }) {
    return (
        <div className="preview-container">
            <div className="left-preview">
                <h3>Example Code:</h3>
                <pre>
                    {htmlContent}
                </pre>
            </div>
            <div className="right-preview">
                <h3>Output:</h3>
                <iframe
                    srcDoc={htmlContent}
                    sandbox="allow-scripts allow-same-origin"
                    title="Preview"
                />
            </div>
        </div>
    )
}

Preview.noHeaderFooter = true;

export default Preview;
