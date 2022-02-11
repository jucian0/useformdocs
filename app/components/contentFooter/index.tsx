import React from 'react';
import * as S from './styles';
import { MdEdit } from 'react-icons/md'
import { Config } from '~/config';
import { useLocation } from 'remix';
const fixPath = (path: string) => {
  const pathWithFrontSlash = path.startsWith('/') ? path : `/${path}`
  const pathWithBackSlash = pathWithFrontSlash.endsWith('/')
    ? pathWithFrontSlash
    : `${pathWithFrontSlash}/`

  return pathWithBackSlash
}

const createEditUrl = (repository: string, branch: string, path: string, filepathWithName: string) => {
  const normalizedPath = fixPath(path)
  return `${repository}/tree/${branch}${normalizedPath}src/pages${filepathWithName}.mdx`
}

const EditOnGithubLink = ({
  repository,
  branch,
  path,
  filepathWithName
}: any) => {
  const href = createEditUrl(repository, branch, path, filepathWithName)
  return (
    <a className="text-sm" href={href} target="_blank"><MdEdit size="1.2rem" />&nbsp;Edit this page on GitHub</a>
  )
}

export default function ContentFooter() {

  const { pathname } = useLocation()

  return (
    <S.Wrapper>
      <EditOnGithubLink
        repository={Config.docsRepository || Config.repository}
        branch={Config.branch}
        path={Config.path}
        filepathWithName={pathname}
      />
    </S.Wrapper>
  )
}